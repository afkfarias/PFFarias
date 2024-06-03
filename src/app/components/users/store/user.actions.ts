import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { IUser } from '../models';

export const UserActions = createActionGroup({
  source: 'User',
  events: {
    'Load Users': emptyProps(),
    'Load Users Success': props<{ data: IUser[] }>(),
    'Load Users Failure': props<{ error: unknown }>(),
  }
});
