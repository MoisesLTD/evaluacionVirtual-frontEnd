import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Asignatura } from '../models/asignatura';
import { Examen } from '../models/examen';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class ExamenService extends CommonService<Examen>{
  //Valor de nuestra ruta a spring
  protected baseEndpoint = 'https://back-examenes-dot-microserviciosdeploy.rj.r.appspot.com/api/examenes';
  
  constructor(http: HttpClient) { 
    super(http);
  }
  public findAllAsignatura(): Observable<Asignatura[]>{
    return this.http.get<Asignatura[]>(`${this.baseEndpoint}/asignaturas`);
  }

  public filtrarPorNombre(nombre: string): Observable<Examen[]>{
    return this.http.get<Examen[]>(`${this.baseEndpoint}/filtrar/${nombre}`);
  }
}
