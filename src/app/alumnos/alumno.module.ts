import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AlumnoListComponent } from './alumno-list.component';
import { AlumnoDetailComponent } from './alumno-detail.component';
import { AlumnoService } from './alumno.service';

@NgModule({
  declarations: [
    AlumnoListComponent,
    AlumnoDetailComponent
  ],
  providers: [
     AlumnoService
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
        {path: 'alumnos', component: AlumnoListComponent},
        {path: 'alumnos/:dni', component: AlumnoDetailComponent},
    ])
  ]
})
export class AlumnoModule { }
