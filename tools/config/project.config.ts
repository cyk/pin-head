import { join } from 'path';

import { SeedConfig } from './seed.config';
import { InjectableDependency } from './seed.config.interfaces';

export class ProjectConfig extends SeedConfig {
  PROJECT_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');
  // Create a Pinterest app here:
  // https://developers.pinterest.com/docs/api/overview/
  PINTEREST_APP_ID: string = 'pinterest-app-id';
  // Setup a face sentiments endpoint with
  // Google Vision API via AWS API Gateway and Lambda:
  // https://gist.github.com/cyk/8ec6481d3dcbe10376f8
  SENTIMENT_API_URL: string = 'sentiment-api-url';
  BROWSER_LIST = [
    'edge >= 13',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.4',
    'bb >= 10'
  ];

  constructor() {
    super();
    this.APP_TITLE = 'PinHead';
    let additional_deps: InjectableDependency[] = [
      // md-toast isn't ready https://github.com/angular/material2/issues/115
      {src: 'burnt-toast/build/css/burnttoast.css', inject: true},
      // {src: 'jquery/dist/jquery.min.js', inject: 'libs'},
      // {src: 'lodash/lodash.min.js', inject: 'libs'},
    ];

    const seedDependencies = this.NPM_DEPENDENCIES;

    this.NPM_DEPENDENCIES = seedDependencies.concat(additional_deps);

    this.SYSTEM_CONFIG_DEV.packageConfigPaths
      .push(`${this.APP_BASE}node_modules/**/*/package.json`);

    this.SYSTEM_BUILDER_CONFIG.packageConfigPaths = [
      join(this.PROJECT_ROOT, 'node_modules', '@angular2-material', '*', 'package.json'),
      join(this.PROJECT_ROOT, 'node_modules', '*', 'package.json'),
      join(this.PROJECT_ROOT, 'node_modules', '@angular', '*', 'package.json')
    ];
  }
}
