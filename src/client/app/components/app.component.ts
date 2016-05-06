import {Component} from 'angular2/core';
import {HTTP_PROVIDERS, JSONP_PROVIDERS} from 'angular2/http';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MdToolbar} from '@angular2-material/toolbar';
import {SidenavComponent} from './sidenav.component';
import {ToolbarComponent} from './toolbar.component';

import {
  PinterestService,
  WebcamService,
  SentimentService
} from '../shared/index';

import {PinComponent} from '../+pin/index';
import {AboutComponent} from '../+about/index';

@Component({
  selector: 'ph-app',
  providers: [
    HTTP_PROVIDERS,
    JSONP_PROVIDERS,
  ],
  viewProviders: [
    PinterestService,
    WebcamService,
    SentimentService
  ],
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
