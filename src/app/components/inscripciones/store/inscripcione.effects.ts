import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { InscripcioneActions } from './inscripcione.actions';
import { InscripcionesService } from '../../../core/inscripciones/inscripciones.service';


@Injectable()
export class InscripcioneEffects {

  loadInscripciones$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(InscripcioneActions.loadInscripciones),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.inscripcionesService.getInscripciones().pipe(
          map(data => InscripcioneActions.loadInscripcionesSuccess({ data })),
          catchError(error => of(InscripcioneActions.loadInscripcionesFailure({ error }))))
      )
    );
  });

  createInscripcion$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(InscripcioneActions.createInscripcion),
      concatMap((action) =>
        this.inscripcionesService.createInscripcion(action.payload).pipe(
          map((data) => InscripcioneActions.createInscripcionSuccess({ data })),
          catchError((error) =>
            of(InscripcioneActions.createInscripcionFailure({ error }))
          )
        )
      )
    );
  });


  constructor(private actions$: Actions, private inscripcionesService: InscripcionesService) {}
}
