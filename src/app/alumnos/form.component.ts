import { Component, OnInit } from '@angular/core';
import { AlumnoService } from './alumno.service';
import { IAlumno } from './alumno.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private _alumnoService: AlumnoService, private _router: Router) { }
  
  ngOnInit() {
  }
    
  enviarDatos(data) {
    console.log(data);
    let alumnoEntrada: IAlumno = {
      dni:data.dni, 
      nombre: data.nombre, 
      apellido: data.apellido, 
      curso:data.curso, 
      notas:[],
      avatar:''
    }
    this.nuevoAlumno(alumnoEntrada);
  }

  private nuevoAlumno(al){

    this._alumnoService.setAlumno(al).subscribe(result => {
      if(result){
        console.log("Insercion OK");
        this._router.navigate(['/alumnos']);
      }
    })
  }

}
