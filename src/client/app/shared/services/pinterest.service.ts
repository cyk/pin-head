import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/bindCallback';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/concatAll';

PDK.init({ appId: '<%= PINTEREST_APP_ID %>', cookie: true });

export class PinterestService {
  login(): Observable<Object> {
    return Observable.bindCallback(
      PDK.login.bind(PDK, {scope: 'read_public, write_public, read_relationships'}),
      (response: any) => response.session
    )();
  }
  logout(): Observable<Object> {
    return Observable.bindCallback(PDK.logout.bind(PDK))();
  }
  loggedIn(): boolean {
    return !!PDK.getSession();
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
  rePin(pin: any, board: any): Observable<Object> {
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
