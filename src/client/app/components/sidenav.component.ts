import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';

@Component({
  selector: 'ph-sidenav',
  templateUrl: 'app/components/sidenav.component.html',
  styleUrls: ['app/components/sidenav.component.scss'],
  directives: [ROUTER_DIRECTIVES, MD_LIST_DIRECTIVES]
})
export class SidenavComponent {}
