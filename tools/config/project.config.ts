import {join} from 'path';
import {SeedConfig} from './seed.config';
import {InjectableDependency} from './seed.config.interfaces';

export class ProjectConfig extends SeedConfig {
  PROJECT_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');
  SCSS_SRC = `${this.APP_SRC}/scss`;

  // Declare local files that needs to be injected
  APP_ASSETS: InjectableDependency[] = [
    { src: `${this.SCSS_SRC}/main.scss`, inject: true, vendor: false }
  ];

  constructor() {
    super();
    // this.APP_TITLE = 'Put name of your app here';
    let additional_deps: InjectableDependency[] = [
      // {src: 'jquery/dist/jquery.min.js', inject: 'libs'},
      // {src: 'lodash/lodash.min.js', inject: 'libs'},
    ];

    const seedDependencies = this.NPM_DEPENDENCIES;

    this.NPM_DEPENDENCIES = seedDependencies.concat(additional_deps);

    this.SYSTEM_CONFIG_DEV.packageConfigPaths
      .push(`${this.APP_BASE}node_modules/**/*/package.json`);
  }
}
