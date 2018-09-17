import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Store } from '@ngrx/store';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/withLatestFrom';
import { HOUR, SECOND, ADVANCE, RECALL } from '../reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public time;
  public people;

  public click$ = new Subject<string>()
      .map((value) => ({ type: HOUR, payload: parseInt(value, null) }));

  public person$ = new Subject()
      .map((value) => ({ payload: value, type: ADVANCE }));

  public recall$ = new Subject();

  public seconds$ = Observable
      .interval(1000)
      .mapTo({ type: SECOND, payload: 1 });


  constructor(store: Store<any>) {
    this.time = store.select('clock');
    this.people = store.select('people');

    Observable.merge(
      this.click$,
      this.seconds$,
      this.person$,
      this.recall$
        .withLatestFrom(this.time, (_, y) => y)
        .map((time) => ({ type: RECALL, payload: time }))
      ).subscribe(store.dispatch.bind(store));
  }
}
