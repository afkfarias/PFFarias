import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICreateInscripcionData, IInscripcion } from '../../components/inscripciones/models';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InscripcionesService {

  constructor(private httpClient: HttpClient) { }

  getInscripciones(): Observable<IInscripcion[]> {
    return this.httpClient.get<IInscripcion[]>(
      environment.baseAPIURL + '/registrations'
    );
  }

  createInscripcion(payload: ICreateInscripcionData): Observable<IInscripcion> {
    return this.httpClient.post<IInscripcion>(
      environment.baseAPIURL + '/registrations',
      payload
    );
  }

  deleteInscripcionById(id: string): Observable<IInscripcion> {
    return this.httpClient.delete<IInscripcion>(
      environment.baseAPIURL + '/registration/' + id
    );
  }
}
