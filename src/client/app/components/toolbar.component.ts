import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {MdButton} from '@angular2-material/button';
import {PinterestService} from '../shared/services/pinterest.service';

@Component({
  selector: 'ph-toolbar',
  templateUrl: 'app/components/toolbar.component.html',
  styleUrls: ['app/components/toolbar.component.scss'],
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
