import { createSelector } from '@ngrx/store';
import { UsersState } from './store.types';

export const selectFeature = (state: { users: UsersState }) => state.users;

export const selectIsFetching = createSelector(
  selectFeature,
  (state) => state.isFetching
);

export const selectUsers = createSelector(
  selectFeature,
  (state) => state.users
);

export const selectPagination = createSelector(
  selectFeature,
  (state) => state.pagination
);

export const selectUser = createSelector(
  selectFeature,
  (state) => state.user
);
