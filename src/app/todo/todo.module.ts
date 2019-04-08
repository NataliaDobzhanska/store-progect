import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { todoReducer } from '../todo.reducer';

import { TodoComponent } from './todo.component';

@NgModule({
  declarations: [
    TodoComponent
  ],
  imports: [
   // StoreModule.forFeature('todo', { todo: todoReducer}),
  ],
  providers: [],
})
export class TodoModule { }