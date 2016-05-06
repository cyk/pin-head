import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/bindCallback';
import 'rxjs/add/operator/bufferCount';
import 'rxjs/add/operator/concatMap';
import * as Webcam from 'webcamjs';

export class WebcamService {
  configure(config: Webcam.Config): void {
    Webcam.set(config);
  }
  attach(elem: string | HTMLElement) {
    Webcam.attach(elem);
  }
  snaps(stream$: Observable<{}>): Observable<{}> {
    return stream$
      .bufferCount(2, 1)
      .concatMap(() => this.snap());
  }
  snap(): Observable<string> {
    return Observable.bindCallback(
      Webcam.snap.bind(Webcam),
      (dataUri: string) => dataUri.replace('data:image/jpeg;base64,', '')
    )();
  }
}
