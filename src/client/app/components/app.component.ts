import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MdToolbar} from '@angular2-material/toolbar';
import {SidenavComponent} from './sidenav.component';
import {ToolbarComponent} from './toolbar.component';
import {PinterestService} from '../shared/index';
import {PinComponent} from '../+pin/index';
import {AboutComponent} from '../+about/index';

@Component({
  selector: 'ph-app',
  viewProviders: [PinterestService],
  templateUrl: 'app/components/app.component.html',
  directives: [ROUTER_DIRECTIVES, MD_SIDENAV_DIRECTIVES, MdToolbar, SidenavComponent, ToolbarComponent]
})
@RouteConfig([
  {
    path: '/',
    name: 'Pin',
    component: PinComponent
  },
  {
    path: '/about',
    name: 'About',
    component: AboutComponent
  }
])
export class AppComponent {}
