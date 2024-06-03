import { createFeature, createReducer, on } from '@ngrx/store';
import { InscripcioneActions } from './inscripcione.actions';
import { IInscripcion } from '../models';

export const inscripcioneFeatureKey = 'inscripcione';

export interface State {
  inscripciones: IInscripcion[];
  isLoading: boolean;
}

export const initialState: State = {
  inscripciones: [],
  isLoading: false
};

export const reducer = createReducer(
  initialState,
  on(InscripcioneActions.loadInscripciones, state => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(InscripcioneActions.loadInscripcionesSuccess, (state, action) => {
    return {
      ...state,
      isLoading: false,
      inscripciones: action.data,
    };
  }),
  on(InscripcioneActions.loadInscripcionesFailure, (state, action) => state),

  on(InscripcioneActions.createInscripcion, (state) =>  {
    return {
      ...state,
      isLoading: true,
    };
  }),

  on(InscripcioneActions.createInscripcionSuccess, (state, action) =>  {
    return {
      ...state,
      isLoading: false,
      inscripciones: [...state.inscripciones, action.data],
    };
  }),

  on(InscripcioneActions.createInscripcionFailure, (state, action) => {
    return {
      ...state,
      isLoading: false,
      error: action.error,
    };
  }),
);

export const inscripcioneFeature = createFeature({
  name: inscripcioneFeatureKey,
  reducer,
});

