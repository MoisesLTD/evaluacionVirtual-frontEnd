import { Alumno } from './alumno';
import { Examen } from './examen';
import { Generic } from './generic';

export class Curso implements Generic{
    id: number;
    nombre: string;
    creatAt: string;
    alumnos: Alumno[] = [];
    examenes: Examen[] = [];
}
