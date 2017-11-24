import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AlumnoModule } from './alumnos/alumno.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    BuscadorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path:'', redirectTo:'alumnos', pathMatch: 'full'},
      { path:'notfound', component: PageNotFoundComponent},
      { path:'**', redirectTo:'notfound', pathMatch: 'full'},
    ]),
    AlumnoModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
