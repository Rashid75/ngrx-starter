import { Action, createReducer, on } from '@ngrx/store';

import * as action from './app.action';

export interface AppState {
    isAuthenticated: boolean;
  }

const initialState: AppState = {
  isAuthenticated: false,
};

const _reducer = createReducer(initialState, 
    on(action.login, state => ({  isAuthenticated: true})),
    on(action.logout, state => ({  isAuthenticated: false})),
);

export function appReducer(state: AppState | undefined, action: Action) {
    return _reducer(state, action);
  }