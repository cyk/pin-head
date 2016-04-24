import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';

import {NameListService} from '../../shared/index';

@Component({
  selector: 'ph-pin',
  templateUrl: 'app/+pin/components/pin.component.html',
  styleUrls: ['app/+pin/components/pin.component.scss'],
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES]
})
export class PinComponent {
  newName: string;
  constructor(public nameListService: NameListService) {}

  /*
   * @param newname  any text as input.
   * @returns return false to prevent default form submit behavior to refresh the page.
   */
  addName(): boolean {
    this.nameListService.add(this.newName);
    this.newName = '';
    return false;
  }
}
