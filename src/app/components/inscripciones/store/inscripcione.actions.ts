import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { ICreateInscripcionData, IInscripcion } from '../models';
import { HttpErrorResponse } from '@angular/common/http';

export const InscripcioneActions = createActionGroup({
  source: 'Inscripcione',
  events: {
    'Load Inscripciones': emptyProps(),
    'Load Inscripciones Success': props<{ data: IInscripcion[] }>(),
    'Load Inscripciones Failure': props<{ error: unknown }>(),

    'Create Inscripcion': props<{ payload: ICreateInscripcionData }>(),
    'Create Inscripcion Success': props<{ data: IInscripcion }>(),
    'Create Inscripcion Failure': props<{ error: unknown }>(),

    'Delete Inscripcion By Id': props<{ id: string }>(),
    'Delete Inscripcion By Id Success': props<{ data: IInscripcion }>(),
    'Delete Inscripcion By Id Failure': props<{ error: HttpErrorResponse }>(),
  }
});
