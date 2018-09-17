import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { clock, people } from './reducers';

@NgModule({
  imports: [StoreModule.forRoot({ clock, people })]
})
export class AppStoreModule {
}
