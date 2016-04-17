import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'ph-navbar',
  templateUrl: 'app/components/navbar.component.html',
  styleUrls: ['app/components/navbar.component.scss'],
  directives: [ROUTER_DIRECTIVES]
})
export class NavbarComponent {}
