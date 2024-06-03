import { createFeature, createReducer, on } from '@ngrx/store';
import { UserActions } from './user.actions';
import { IUser } from '../models';

export const userFeatureKey = 'user';

export interface State {
  loadingUsers: boolean;
  users: IUser[];
  error: unknown;
}

export const initialState: State = {
  loadingUsers: false,
  users: [],
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(UserActions.loadUsers, (state) => {
    return { 
      ...state,
      loadingUsers: true
    };
  }),
  on(UserActions.loadUsersSuccess, (state, action) => {
    return { 
      ...state,
      users: action.data,
      loadingUsers: false
    };
  }),
  on(UserActions.loadUsersFailure, (state, action) => {
    return { 
      ...state,
      error: action.error,
      loadingUsers: false
    };
  }),
);

export const userFeature = createFeature({
  name: userFeatureKey,
  reducer,
});

