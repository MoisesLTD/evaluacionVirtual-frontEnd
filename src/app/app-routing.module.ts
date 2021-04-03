import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { AlumnosFormComponent } from './components/alumnos/alumnos-form.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { ResponderExamenComponent } from './components/alumnos/responder-examen.component';
import { AsignarAlumnosComponent } from './components/cursos/asignar-alumnos.component';
import { AsignarExamenesComponent } from './components/cursos/asignar-examenes.component';
import { CursoFormComponent } from './components/cursos/curso-form.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { ExamenFormComponent } from './components/examenes/examen-form.component';
import { ExamenesComponent } from './components/examenes/examenes.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path:'alumnos', component:AlumnosComponent},
  {path:'alumnos/form', component:AlumnosFormComponent},
  {path:'alumnos/form/:id', component:AlumnosFormComponent},
  {path:'alumnos/responder-examen/:id', component:ResponderExamenComponent},
  {path:'cursos', component:CursosComponent},
  {path:'cursos/form', component:CursoFormComponent},
  {path:'cursos/form/:id', component:CursoFormComponent},
  {path:'examenes', component:ExamenesComponent},
  {path:'examenes/form', component:ExamenFormComponent},
  {path:'examenes/form/:id', component:ExamenFormComponent},
  {path:'cursos/asignar-alumnos/:id', component:AsignarAlumnosComponent},
  {path:'cursos/asignar-examenes/:id', component:AsignarExamenesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
