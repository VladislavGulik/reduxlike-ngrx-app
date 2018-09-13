import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { clock } from '../reducers';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ clock }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
