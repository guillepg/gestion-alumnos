import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IAlumno } from './alumno.interface';
import { AlumnoService } from './alumno.service';

@Component({
  selector: 'app-alumno-detail',
  templateUrl: './alumno-detail.component.html',
  styleUrls: ['./alumno-detail.component.css']
})
export class AlumnoDetailComponent implements OnInit, OnDestroy {

  pageTitle: string = 'Detalle Alumno';
  alumno: IAlumno;

  constructor(private _route:ActivatedRoute,
                private _router: Router, 
                private _alumnoService: AlumnoService  
              ) { }

  ngOnInit() {
    console.log('ngOnInit_detalle');
    let dni = this._route.snapshot.paramMap.get('dni');
    this.pageTitle += `: ${dni}`;
    /*
    this._productService.getProduct(id)
      .subscribe((p) => {
        this.product = p;
      })
    */
    this._alumnoService.getAlumno(dni)
      .then((al:IAlumno) => {
        if (al !== null){
          this.alumno = al;
        } else {
          this._router.navigate(['/notfound']);
        }
      }, (error) => {
        alert(error);
        this._router.navigate(['/notfound']);
      });
  }

  back() {
    this._router.navigate(['/alumnos']);
  }

  ngOnDestroy(){
    console.log('ngOnDestroy_detalle');
  }

}
