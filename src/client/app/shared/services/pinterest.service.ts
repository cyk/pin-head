import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/bindCallback';

PDK.init({ appId: '<%= PINTEREST_APP_ID %>', cookie: true });

export class PinterestService {
  login(): Observable<Object> {
   return Observable.bindCallback(
      PDK.login.bind(PDK, {scope: 'read_public, write_public'}),
      (response: any) => response.session
    )();
  }
  logout(): Observable<Object> {
    return Observable.bindCallback(PDK.logout.bind(PDK))();
  }
  loggedIn(): boolean {
    return !!PDK.getSession();
  }
}
