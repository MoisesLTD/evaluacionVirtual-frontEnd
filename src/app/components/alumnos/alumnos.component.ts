import { Component, OnInit, ViewChild } from '@angular/core';
import { AlumnoService } from 'src/app/services/alumno.service';
import { Alumno } from 'src/app/models/alumno';
import { CommonListarComponent } from '../common-listar.component';
import { BASE_ENDPOINT } from 'src/app/config/app';


@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent 
extends CommonListarComponent<Alumno, AlumnoService> implements OnInit {
  
  baseEndpoint = 'https://back-alumnos-dot-microserviciosdeploy.rj.r.appspot.com/api/alumnos';
  constructor(service: AlumnoService) {
    super(service);
    this.titulo = 'Alumnos';
    this.nombreModel = Alumno.name;
  }

}
