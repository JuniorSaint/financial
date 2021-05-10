
import { Inject, Injectable, Injector } from '@angular/core';
import {  Observable } from 'rxjs';
import { catchError, map, take } from 'rxjs/operators';
import { HttpHeaders,  HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { InterfacePadrao } from './interface-padrao';



@Injectable({
  providedIn: 'root'
})
export abstract class CrudServico< T extends  InterfacePadrao >{

  http: HttpClient;
  URL!: string;

  constructor(@Inject(String)  API: string,  injector: Injector ) {
    this.http = injector.get(HttpClient);
     this.URL = API;
  }

  get(): Observable<T[]> {
    return this.http.get<T[]>(this.URL)
      .pipe( 
        map( ( dados:any) => dados = dados.result),
        catchError(this.handleError)
      );
  }

  getByID(id: string): Observable<T> {
    return this.http.get<T>(`${this.URL}/${id}`)
      .pipe(
        take(1),
        map( ( dados:any) => dados = dados.result),
        catchError(this.handleError)
      );
  }


  create(source: T): Observable<T> {

    return this.http.post<T>(`${this.URL}/create`, source, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    })
      .pipe(
        catchError(this.handleError)
      );
  }


  update(source: T, id:string): Observable<T> {

    return this.http.put<T>(`${this.URL}/${id}`, source, {
      headers: new HttpHeaders({ 'contente-Type': 'application/json' })
    });
  }


  delete(id: string): Observable<T> {
    return this.http.delete<T>(`${this.URL}/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }


  // **************  Tratamento de erro *****************

  public handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error('Client Side Error :', errorResponse.error.message);

    } else {
      console.error('Server Side Error :', errorResponse);
    }
    alert(errorResponse.error.message);
    return throwError( errorResponse.error.message);
  }

}
