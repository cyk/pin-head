import {Component, OnInit} from 'angular2/core';
import * as Webcam from 'webcamjs';
import {Observable} from 'rxjs/Observable';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MdButton} from '@angular2-material/button';

import {PinterestService, WebcamService} from '../../shared/index';

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

  constructor(
    private pinterest: PinterestService,
    private webcam: WebcamService
  ) {}

  ngOnInit() {
    this.followedBoards$ = this.pinterest.followedBoards();
    this.myBoards$ = this.pinterest.myBoards();

    this.webcam.configure({
      width: 1024,
      height: 576,
      image_format: 'jpeg',
      jpeg_quality: 10
    });
  }

  snap() {
    this.webcam.snap().subscribe((dataUri) => console.log('snap dataUri', dataUri));
  }

  setToBoard(board: any) {
    this.webcam.attach('#camera');
    this.toBoard = board;
  }

  showPinCandidates(board: any) {
    this.fromBoard = board;
    this.webcam.attach('#camera');
    this.pinterest.pinCandidates(board).subscribe(pin => {
      this.pin = pin;
    });
  }

  rePin(pin: any, toBoard: any) {
    this.pinterest.rePin(pin, toBoard).subscribe((r: any) => {
      console.log('r', r);
    });
  }

  thumbnail(board: any) {
    return board.image['60x60'];
  }
}
