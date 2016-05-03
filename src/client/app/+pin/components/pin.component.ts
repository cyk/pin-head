import {Component, OnInit} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MdButton} from '@angular2-material/button';

import {PinterestService} from '../../shared/index';

@Component({
  selector: 'ph-pin',
  templateUrl: 'app/+pin/components/pin.component.html',
  styleUrls: ['app/+pin/components/pin.component.scss'],
  directives: [
    FORM_DIRECTIVES,
    CORE_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MdButton
  ]
})
export class PinComponent implements OnInit {
  myBoards$: Observable<any>;
  followedBoards$: Observable<any>;
  pin: any;
  fromBoard: any;
  toBoard: any;

  constructor(private pinterest: PinterestService) {}

  ngOnInit() {
    this.followedBoards$ = this.pinterest.followedBoards();
    this.myBoards$ = this.pinterest.myBoards();
  }

  setToBoard(board: any) {
    this.toBoard = board;
  }

  showPinCandidates(board: any) {
    this.fromBoard = board;
    this.webcam.attach('#camera');
    this.pinterest.pinCandidates(board).subscribe(pin => {
      this.pin = pin;
    });
  }

  rePin(pin: any) {
    console.log('rePin', pin);
    console.log('pinToBoardName', this.toBoard.name);
  }

  thumbnail(board: any) {
    return board.image['60x60'];
  }
}
