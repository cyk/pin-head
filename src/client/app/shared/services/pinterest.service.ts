import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/observable/bindCallback';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/concatAll';

PDK.init({ appId: '<%= PINTEREST_APP_ID %>', cookie: true });

export class PinterestService {

  loggedIn$ = this._loggedIn.asObservable().startWith(!!PDK.getSession());

  constructor(private _loggedIn = new Subject<boolean>()) {}

  login(): Observable<boolean> {
    Observable.bindCallback(
      PDK.login.bind(PDK, {scope: 'read_public, write_public, read_relationships'}),
      (response: any) => response.session)()
      .subscribe(() => this.broadcastLoggedIn());
    return this.loggedIn$;
  }
  logout(): Observable<boolean> {
    Observable.bindCallback(PDK.logout.bind(PDK))()
    .subscribe(() => this.broadcastLoggedIn());
    return this.loggedIn$;
  }
  broadcastLoggedIn() {
    this._loggedIn.next(!!PDK.getSession());
  }
  myBoards(): Observable<any> {
    return Observable.bindCallback(
      PDK.me.bind(PDK, 'boards', {fields:'id,description,name,image,url'}),
      (response: any) => response.data
    )();
  }
  followedBoards(): Observable<any[]> {
    return Observable.bindCallback(
      PDK.me.bind(PDK, 'following/boards', {fields:'id,description,name,image'}),
      (response: any) => response.data
    )();
  }
  pins(board: any): Observable<Object> {
    return Observable.bindCallback(
      PDK.request.bind(PDK, `/boards/${board.id}/pins/`, {fields: 'id,note,link,image'}),
      (response: any) => response.data
    )().concatAll();
  }
  repin(pin: any, board: any): Observable<Object> {
    let url = board.url.split('/').slice(-3, -1).join('/');

    let data = {
      board: url,
      note: pin.note,
      link: pin.link,
      image_url: pin.image.original.url
    };
    return Observable.bindCallback(
      PDK.request.bind(PDK, '/pins/', 'POST', data),
      (response: any) => response.data
    )();
  }
}
