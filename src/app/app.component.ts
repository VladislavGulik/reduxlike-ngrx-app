import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public click$ = new Subject();
  public clock;

  constructor() {
    this.clock = Observable.merge(
      this.click$,
      Observable.interval(1000)
    ).map(() => new Date());
  }
}
