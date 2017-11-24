import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { IAlumno } from './alumno.interface';
import { AlumnoService } from './alumno.service';
import { Utils } from '../utils/utils';


@Component({
  selector: 'app-alumno-list',
  templateUrl: './alumno-list.component.html',
  styleUrls: ['./alumno-list.component.css']
})
export class AlumnoListComponent implements OnInit, OnDestroy {

  pageTitle: string = 'Lista alumnos';
  showImage: boolean = false;
  imageWidth: number = 50;
  imageMargin: number = 2;
  showTitle: boolean = true;
  subscription:any;
  
  alumnos:IAlumno[];
  alumnosOrdenados: IAlumno[];
  
  constructor(private _alumnoService: AlumnoService) {
  }

  ngOnInit() {
    console.log('ngOnInit_listado');
    this.subscription = this._alumnoService.getAlumnos()
      .subscribe((alumnos) => {
        this.alumnos = alumnos;
        this.alumnosOrdenados = this.alumnos
          .sort((a1:IAlumno,a2:IAlumno) => {
            if (Utils.calcularMedia(a1.notas) > Utils.calcularMedia(a2.notas)){
              return 1;
            }
            if (Utils.calcularMedia(a1.notas) < Utils.calcularMedia(a2.notas)){
              return -1;
            }
            return 0;
          })
      }, (error) => {
        alert(error);
      });
  }

  ngOnDestroy(){
    console.log('ngOnDestroy_listado');
    this.subscription.unsubscribe();
  }

  toggleImage(){
    this.showImage = !this.showImage;
  }

  nuevoAlumno(){
    let  alumno: IAlumno = {
      dni: '44444444H',
      nombre: 'Nombre 4',
      apellido: 'Apellido 4',
      curso: '4-ESO',
      notas: [1,4,6,8],
      avatar: ''
    }

    this._alumnoService.setAlumno(alumno);
  }
}
