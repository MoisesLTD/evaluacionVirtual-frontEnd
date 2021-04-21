import { Injectable } from '@angular/core';
import { CommonService } from './common.service';
import { Curso } from '../models/curso';
import { HttpClient } from '@angular/common/http';
import { Alumno } from '../models/alumno';
import { Observable } from 'rxjs';
import { Examen } from '../models/examen';

@Injectable({
  providedIn: 'root'
})
export class CursoService extends CommonService<Curso>{
  //Valor de nuestra ruta a spring
  protected baseEndpoint = 'https://back-cursos-dot-rugged-weft-311315.rj.r.appspot.com/api/cursos';

  constructor(http: HttpClient) { 
    super(http);
  }

  asignarAlumnos(curso: Curso, alumnos: Alumno[]): Observable<Curso>{
    return this.http.put<Curso>(`${this.baseEndpoint}/${curso.id}/asignar-alumnos`,
     alumnos,
     {headers: this.cabeceras});
  }

  eliminarAlumno(curso: Curso, alumno: Alumno): Observable<Curso> {
    return this.http.put<Curso>(`${this.baseEndpoint}/${curso.id}/eliminar-alumno`,
    alumno,
    {headers: this.cabeceras});
  }

  asignarExamenes(curso: Curso, examenes: Examen[]): Observable<Curso>{
    return this.http.put<Curso>(`${this.baseEndpoint}/${curso.id}/asignar-examenes`,
    examenes,
    {headers: this.cabeceras});
  }

  eliminarExamen(curso: Curso, examen: Examen):Observable<Curso>{
    return this.http.put<Curso>(`${this.baseEndpoint}/${curso.id}/eliminar-examen`,
    examen,
    {headers: this.cabeceras});
  }

  obtenerCursoPorAlumnoId(alumno: Alumno): Observable<Curso> {
    return this.http.get<Curso>(`${this.baseEndpoint}/alumno/${alumno.id}`);
  }
}

