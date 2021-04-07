import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_ENDPOINT } from '../config/app';
import { Alumno } from '../models/alumno';
import { CommonService } from './common.service';

const base_url = 'https://backend-dot-macro-gadget-309302.ts.r.appspot.com/api/alumnos';

@Injectable({
  providedIn: 'root'
})

export class AlumnoService extends CommonService<Alumno>{
  //Valor de nuestra ruta a spring
  
  constructor(http: HttpClient) {
    super(http);
   }

   public crearConFoto(alumno: Alumno, archivo: File): Observable<Alumno>{
     const formData = new FormData();
     formData.append('archivo', archivo);
     formData.append('nombre', alumno.nombre);
     formData.append('apellido', alumno.apellido);
     formData.append('email', alumno.email);
     return this.http.post<Alumno>(base_url + '/crear-con-foto',
      formData);
   }

   public editarConFoto(alumno: Alumno, archivo: File): Observable<Alumno>{
    const formData = new FormData();
    formData.append('archivo', archivo);
    formData.append('nombre', alumno.nombre);
    formData.append('apellido', alumno.apellido);
    formData.append('email', alumno.email);
    return this.http.put<Alumno>(`${base_url}/editar-con-foto/${alumno.id}`,
     formData);
  }

  public filtrarPorNombre(nombre: string): Observable<Alumno[]>{
    return this.http.get<Alumno[]>(`${base_url}/filtrar/${nombre}`);
  }
  
}
