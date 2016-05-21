import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {MdButton} from '@angular2-material/button';
import {PinterestService} from '../pinterest/index';

@Component({
  selector: 'ph-toolbar',
  templateUrl: 'app/shared/toolbar/toolbar.component.html',
  styleUrls: ['app/shared/toolbar/toolbar.component.css'],
  directives: [ROUTER_DIRECTIVES, MdButton],
})
export class ToolbarComponent {
  loggedIn$ = this.pinterest.loggedIn$;

  constructor(private pinterest: PinterestService) {}

  login() {
    this.pinterest.login();
  }
  logout() {
    this.pinterest.logout();
  }
}
