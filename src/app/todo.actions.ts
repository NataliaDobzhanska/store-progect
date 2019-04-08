import { Action } from '@ngrx/store';

export enum ActionTypes {
  Push = '[Todo Component] Push',
  Remove = '[Todo Component] Remove'
}

export class Push implements Action {
  readonly type = ActionTypes.Push;
  constructor(public payload: {name: string, id: number}) {}
}

export class Remove implements Action {
  readonly type = ActionTypes.Remove;
  constructor (public payload: {id: number}) {}
}