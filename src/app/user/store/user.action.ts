import { createAction, props } from '@ngrx/store';

export const createUserEvent = createAction(
  '[USER CREATE EVENT] USER',
  props<{ payload: any }>()
);
export const createUser = createAction(
  '[USER CREATE] USER',
  props<{ payload: any }>()
);
export const getUserEvent = createAction('[GET CREATE EVENT] USER');
export const getUser = createAction(
  '[GET CREATE] USER',
  props<{ payload: any }>()
);
