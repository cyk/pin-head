import {Component} from '@angular/core';
import {HTTP_PROVIDERS, JSONP_PROVIDERS} from '@angular/http';
import {ROUTER_DIRECTIVES, Routes} from '@angular/router';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MdToolbar} from '@angular2-material/toolbar';
import {SidenavComponent} from './shared/sidenav/sidenav.component';
import {ToolbarComponent} from './shared/toolbar/toolbar.component';

import {
  PinterestService,
  WebcamService,
  SentimentService
} from './shared/index';

import {PinComponent} from './+pin/index';
import {AboutComponent} from './+about/index';

@Component({
  selector: 'ph-app',
  providers: [
    HTTP_PROVIDERS,
    JSONP_PROVIDERS
  ],
  viewProviders: [
    PinterestService,
    WebcamService,
    SentimentService
  ],
  templateUrl: 'app/app.component.html',
  directives: [ROUTER_DIRECTIVES, MD_SIDENAV_DIRECTIVES, MdToolbar, SidenavComponent, ToolbarComponent]
})
@Routes([
  {
    path: '/',
    component: PinComponent
  },
  {
    path: '/about',
    component: AboutComponent
  }
])
export class AppComponent {}
