import { Action } from '@ngrx/store';
import { ActionTypes } from './todo.actions';

export const initialState = [{
  name: 'Nataliia',
  id: 0
}];

export function todoReducer(state = initialState, action: Action, payload: {name: string, id: number}) {
  switch(action.type) {
    case ActionTypes.Push:
      return state.push(payload);
    case ActionTypes.Remove:
      return state.filter((item) => item.id !== payload.id);
    default:
      return state;
  }
}