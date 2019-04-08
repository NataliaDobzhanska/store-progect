import { Component, OnInit } from '@angular/core';
import { Store, select} from '@ngrx/store';
import { Observable} from 'rxjs';
import { Push, Remove } from '../todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  list$ : Observable<{ name: string, id: number }[]>;

  constructor(private store: Store<{ todo: {name: string, id: number}[] }>) {
    this.list$ = store.pipe(select('todo'));
   }

  push(name: string) {
    let id =  Math.floor(Math.random() * 2500) + 1;
    this.store.dispatch(new Push({name,id}));
  }

  remove(id: number) {
    this.store.dispatch( new Remove({id}))
  }

  ngOnInit() {
  }

}
