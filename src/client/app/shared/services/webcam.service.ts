import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/bindCallback';
import * as Webcam from 'webcamjs';

export class WebcamService {
  configure(config: Webcam.Config): void {
    Webcam.set(config);
  }
  attach(elem: string | HTMLElement) {
    Webcam.attach(elem);
  }
  snap(): Observable<string> {
    return Observable.bindCallback(Webcam.snap.bind(Webcam), (dataUri: string) => dataUri)();
  }
}
