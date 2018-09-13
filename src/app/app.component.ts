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
import { HOUR, SECOND } from '../reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public clock;

  public click$ = new Subject<string>()
      .map((value) => ({ type: HOUR, payload: parseFloat(value) }));

  public seconds$ = Observable
      .interval(1000)
      .mapTo({ type: SECOND, payload: 1 });

  constructor(store: Store<any>) {
    this.clock = store.select('clock');

    Observable.merge(
      this.click$,
      this.seconds$,
      ).subscribe(store.dispatch.bind(store));
  }
}
