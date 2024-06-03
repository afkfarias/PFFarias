import { Component, OnInit } from '@angular/core';
import { InscripcionesService } from '../../core/inscripciones/inscripciones.service';
import { Store } from '@ngrx/store';
import { InscripcioneActions } from './store/inscripcione.actions';
import { AlumnosService } from '../../core/alumnos/alumnos.service';
import { CursosService } from '../../core/cursos/cursos.service';
import { Observable } from 'rxjs';
import { IInscripcion, IInscripcionForm } from './models';
import { IAlumno } from '../alumnos/models';
import { ICurso } from '../cursos/models';
import { FormControl, FormGroup } from '@angular/forms';
import { selectInscripciones, selectIsLoading } from './store/inscripcione.selectors';

@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrl: './inscripciones.component.scss'
})
export class InscripcionesComponent implements OnInit{
  displayedColumns = ['id', 'actions'];

  cursos: ICurso[] = [];
  alumnos: IAlumno[] = [];


  loadingInscripciones$: Observable<boolean>;
  inscripciones$: Observable<IInscripcion[]>;

  inscripcionesForm = new FormGroup<IInscripcionForm>({
    alumno: new FormControl(null),
    curso: new FormControl(null),
  });

  constructor(private inscripcionesService:InscripcionesService, 
    private alumnosService: AlumnosService, 
    private cursosService: CursosService,
     private store: Store) {

      this.loadingInscripciones$ = this.store.select(selectIsLoading);
      this.inscripciones$ = this.store.select(selectInscripciones);
   }
  
  ngOnInit(): void {
    this.alumnosService.getAlumnos().subscribe( (alumnos) => {
      this.alumnos = alumnos;
    }
    )
    this.cursosService.getCursos().subscribe ( (cursos) => {
      this.cursos = cursos;
    })
    this.store.dispatch(
      InscripcioneActions.loadInscripciones()
    ) 
  }

  createInscripcion() {
    this.store.dispatch(
      InscripcioneActions.createInscripcion({
        payload: {
          alumno: this.inscripcionesForm.get('alumno')?.value,
          curso: this.inscripcionesForm.get('curso')?.value,
          fechaInscripcion: new Date()
        },
      })
    );
  }

  
}
