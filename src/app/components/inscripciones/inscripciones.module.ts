import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscripcionesRoutingModule } from './inscripciones-routing.module';
import { InscripcionesComponent } from './inscripciones.component';
import { EffectsModule } from '@ngrx/effects';
import { InscripcioneEffects } from './store/inscripcione.effects';
import { StoreModule } from '@ngrx/store';
import { inscripcioneFeature } from './store/inscripcione.reducer';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    InscripcionesComponent
  ],
  imports: [
    CommonModule,
    InscripcionesRoutingModule,
    SharedModule,
    StoreModule.forFeature(inscripcioneFeature),
    EffectsModule.forFeature([InscripcioneEffects])
  ]
})
export class InscripcionesModule { }
