import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './user.reducer';

const selectFeatureUser = createFeatureSelector<UserState>('user');

export const selectUsers = createSelector(
  selectFeatureUser,
  (state: UserState) => state.users
);
