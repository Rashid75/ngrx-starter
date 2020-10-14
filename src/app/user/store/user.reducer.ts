import { createUser, getUser } from './user.action';
import { Action, createReducer, on } from '@ngrx/store';

export interface UserState {
  users: Array<any>;
}
const userState: UserState = {
  users: [],
};
const _reducer = createReducer(
  userState,
  on(createUser, (state, { payload }) => {
      debugger
      return ({
        users: [...state.users, payload]
      })
  }),
  on(getUser, (state, { payload }) => ({ users: [...payload] }))
);

export function userReducer(state: UserState | undefined, action: Action) {
  return _reducer(state, action);
}
