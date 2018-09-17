import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { clock, people } from '../reducers';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { ClockComponent } from './clock/clock.component';


@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ clock, people }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
