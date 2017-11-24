import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AlumnoListComponent } from './alumno-list.component';
import { AlumnoDetailComponent } from './alumno-detail.component';
import { AlumnoService } from './alumno.service';
import { FormComponent } from './form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AlumnoListComponent,
    AlumnoDetailComponent,
    FormComponent
  ],
  providers: [
     AlumnoService
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
        {path: 'alumnos', component: AlumnoListComponent},
        {path: 'alumnos/:dni', component: AlumnoDetailComponent},
        {path: 'formulario', component: FormComponent}
    ]),
    FormsModule
  ], 
  exports: [
    FormComponent
  ]
})
export class AlumnoModule { }
