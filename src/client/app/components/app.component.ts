import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {NavbarComponent} from './navbar.component';
import {ToolbarComponent} from './toolbar.component';
import {NameListService} from '../shared/index';
import {PinComponent} from '../+pin/index';
import {AboutComponent} from '../+about/index';

@Component({
  selector: 'ph-app',
  viewProviders: [NameListService],
  templateUrl: 'app/components/app.component.html',
  directives: [ROUTER_DIRECTIVES, NavbarComponent, ToolbarComponent]
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
