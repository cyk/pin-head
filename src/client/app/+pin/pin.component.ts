import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/zip';
import { FORM_DIRECTIVES, CORE_DIRECTIVES } from '@angular/common';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MdButton} from '@angular2-material/button';
import * as BurntToast from 'burnt-toast';

import {
  PinterestService,
  WebcamService,
  SentimentService
} from '../shared/index';

const REVIEW_DELAY = 3000;

@Component({
  selector: 'ph-pin',
  templateUrl: 'app/+pin/pin.component.html',
  styleUrls: ['app/+pin/pin.component.css'],
  directives: [
    FORM_DIRECTIVES,
    CORE_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MdButton
  ]
})

export class PinComponent implements OnInit {
  // until md-toast is ready https://github.com/angular/material2/issues/115
  toast: BurntToast = new BurntToast();
  loggedIn$: Observable<boolean> = this.pinterest.loggedIn$;
  myBoards$: Observable<any>;
  followedBoards$: Observable<any>;
  pin: any;
  repinned: any;
  fromBoard: any;
  toBoard: any;

  constructor(
    private pinterest: PinterestService,
    private webcam: WebcamService,
    private sentiment: SentimentService
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

  login() {
    this.pinterest.login();
  }

  snap() {
    this.webcam.snap().subscribe((dataUri) => console.log('snap dataUri', dataUri));
  }

  setFromBoard(board: any) {
    this.webcam.attach('#camera');
    this.fromBoard = board;
  }

  showPinCandidates(toBoard: any) {
    this.toBoard = toBoard;

    // See marbles https://github.com/cyk/pin-head/wiki/Rx-Marbles
    let pins$ = this.pinterest.pins(this.fromBoard);
    let pinsWithDelay$ = pins$.zip(Observable.timer(0, REVIEW_DELAY), (p) => p);
    let snaps$ = this.webcam.snaps(pinsWithDelay$);
    let pinSentiments$ = pins$.zip(this.sentiment.get(snaps$));

    pinsWithDelay$.subscribe(pin => {
      this.pin = pin;
    });

    pinSentiments$.subscribe(([pin, sentiment]) => {
      if (sentiment === 'JOY') {
        this.pinterest
          .repin(pin, this.toBoard)
          .subscribe((pin: any) => this.toast.makeToast(pin.note));
      }
    });
  }

  thumbnail(board: any) {
    return board.image['60x60'];
  }
}
