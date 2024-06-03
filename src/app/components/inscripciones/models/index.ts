import { FormControl } from "@angular/forms";
import { IAlumno } from "../../alumnos/models";
import { ICurso } from "../../cursos/models";

export interface IInscripcion {
  id: string;
  alumno?: IAlumno;
  curso?: ICurso;
  alumnoId: string;
  cursoId:string;
  fechaInscripcion: Date;
}

export interface IInscripcionForm {
  alumno: FormControl<IAlumno | null>;
  curso: FormControl<ICurso | null>;
}

export interface ICreateInscripcionData {
  alumno?: IAlumno | null;
  curso?: ICurso | null;
  fechaInscripcion: Date | null;
}
