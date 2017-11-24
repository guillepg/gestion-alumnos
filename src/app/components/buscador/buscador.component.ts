import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '../../alumnos/alumno.service';
import { IAlumno } from '../../alumnos/alumno.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() {
  }

  buscar(clave:string){
    console.log("Clave busqueda:" + clave);
    this._router.navigate(['/alumnos', clave]);
  }

}
