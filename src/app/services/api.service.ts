import { Injectable } from '@angular/core';
import { Alumnos } from '../interfaces/alumnos';
import { Observable, Subject, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _refresh$ = new Subject<void>();

  private getHttpOptions() {
    return {
      headers : new HttpHeaders({
        'content-type' : 'application/json'
      })
    }
  }

  private handleError(error: HttpErrorResponse) {

    if(error){
      console.warn(`error backend ${error.status} : ${error.message}`)
    }
    return throwError('error en http')
  }

private urlApi = 'https://62c890858c90491c2cb7a5ed.mockapi.io/api/capacitacion-it/';
  constructor(private http : HttpClient, private router: Router) {}

  get refresh$(){
    return this._refresh$    
  }

  getUsers(e: string): Observable<Alumnos[]> {
    console.log(this.urlApi + e)
    return this.http.get<Alumnos[]>(this.urlApi + e)
  }
  deleteUser(id: number){
    return this.http.delete<Alumnos[]>(this.urlApi + 'alumnos/' + id,
    this.getHttpOptions())
    .pipe(
      tap(() => {
        this._refresh$.next();
      })
      )
      // console.log(this.urlApi + 'alumnos/' + id)
    }
     usuario : Alumnos = {nombre : 'ivan', cursos: 'ivan',inscripcion:1,id:'10'};

  updateUser(usuario : Alumnos, id: string|null):Observable<Alumnos>{
    // console.log(this.urlApi + 'alumnos/' + '1')
    // let direccion = this.usuario;
    return this.http.put<Alumnos>(this.urlApi + 'alumnos/' + id ,usuario, this.getHttpOptions())
    .pipe(
      tap(()=> {
        this.router.navigate(['../administrador/tabla'])
      })
    )
    
      
  }

  postUser(usuario : Alumnos):Observable<Alumnos>{
    // console.log(this.urlApi + 'alumnos/' + '1')
    // let direccion = this.usuario;
    return this.http.post<Alumnos>(this.urlApi + 'alumnos', usuario, this.getHttpOptions())
    .pipe(
      tap(()=> {
        this.router.navigate(['../administrador/tabla'])
      })
    )
    
  }
}
