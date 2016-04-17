import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MdToolbar} from '@angular2-material/toolbar';
import {NavbarComponent} from './navbar.component';
import {NameListService} from '../shared/index';
import {PinComponent} from '../+pin/index';
import {AboutComponent} from '../+about/index';

@Component({
  selector: 'ph-app',
  viewProviders: [NameListService],
  templateUrl: 'app/components/app.component.html',
  directives: [ROUTER_DIRECTIVES, MD_SIDENAV_DIRECTIVES, MdToolbar, NavbarComponent]
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
