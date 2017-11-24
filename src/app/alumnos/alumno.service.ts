import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { IAlumno } from './alumno.interface';

@Injectable()
export class AlumnoService {

  alumnos:IAlumno[];
//  private subject: Subject<IAlumno[]> = new Subject<IAlumno[]>();

  constructor(private _http:HttpClient) {

    this._http.get<IAlumno[]>('./api/alumnos/alumnos.json')
    .subscribe((data) => {
      this.alumnos = data;
      localStorage.setItem('alumnos',JSON.stringify(this.alumnos));
    })
   }

  getAlumnos(): Observable<IAlumno[]> {
    this.alumnos = JSON.parse(localStorage.getItem('alumnos')) || [];
    //this.subject.next(this.alumnos);  // emite un nuevo evento
    return Observable.of(this.alumnos);
  }

  private handleError(err: HttpErrorResponse){
    console.log(err.message);
    return Observable.throw(err.message);
  }

  getAlumno(dni: string): Promise<IAlumno> {
    return new Promise((resolve, reject) => {
      //resolve({name:'Producto 10'})
      //reject("No se ha encontrado producto");
      
      this.getAlumnos().subscribe((data) => {
        let p = data.find((item) => item.dni == dni);
        
        if (p !== null){ //si se ha encontrado...
          resolve(p);
        } else {
          resolve(null)
        }
      }, (error) => {
        reject("Ha habido un error en la obtencion de alumnos");
      });

    });
    }

    setAlumno(al: IAlumno):Observable<IAlumno[]>{
      
      try{
        // 1.- recuperar los alumnos dados de alta anteriormente
        this.alumnos = JSON.parse(localStorage.getItem('alumnos')) || [];
        // 2.- añadir a esa coleccion el nuevo alumno
        this.alumnos.push(al);

        //this.subject.next(this.alumnos);
        
        // 3.- persistir la colección modificada
        localStorage.setItem('alumnos',JSON.stringify(this.alumnos));
        return Observable.of(this.alumnos);
      } catch (ex){
        return null;
      }
      
      
      
    }

    updateAlumno(al: IAlumno): Observable<boolean>{
      //1.- recuperar los alumnos dados de alta anteriormente
      this.alumnos = JSON.parse(localStorage.getItem('alumnos')) || [];
      let alumno = this.alumnos.find((alumno) => {
        return alumno.dni === al.dni;
      });
      if (alumno !== null){
        let index = this.alumnos.indexOf(alumno);
        this.alumnos[index] = al;

        //3.- persistir la colección modificada
        localStorage.setItem('alumnos',JSON.stringify(this.alumnos));
      }
      
      

      return Observable.of(true);
    }

    removeAlumno(dni: string): Observable<boolean>{

      //1.- recuperar los alumnos dados de alta anteriormente
      this.alumnos = JSON.parse(localStorage.getItem('alumnos')) || [];
      let alumno = this.alumnos.find((alumno) => {
        return alumno.dni === dni;
      });
      if (alumno !== null){
        let index = this.alumnos.indexOf(alumno);
        this.alumnos.slice(index,1);

        //3.- persistir la colección modificada
        localStorage.setItem('alumnos',JSON.stringify(this.alumnos));
      }
      return Observable.of(true);
    }

    

    
  }
