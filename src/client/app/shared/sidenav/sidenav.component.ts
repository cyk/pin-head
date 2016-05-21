import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';

@Component({
  selector: 'ph-sidenav',
  templateUrl: 'app/shared/sidenav/sidenav.component.html',
  styleUrls: ['app/shared/sidenav/sidenav.component.css'],
  directives: [ROUTER_DIRECTIVES, MD_LIST_DIRECTIVES]
})
export class SidenavComponent {}
