import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/concatMap';

@Injectable()
export class SentimentService {

  constructor(private http: Http) {}

  get(stream$: Observable<{}>): Observable<{}> {
    return stream$.concatMap((dataUri: string) => this.analyze(dataUri));
  }

  private analyze(image: string): Observable<string> {
    let body = JSON.stringify({ image });
    return this.http
      .post('<%= SENTIMENT_API_URL %>/face-sentiments', body)
      .map((response: Response) => response.json().likely_sentiment);
  }
}
