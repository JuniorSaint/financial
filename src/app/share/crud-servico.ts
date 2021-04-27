
import { Inject, Injectable, Injector } from '@angular/core';
import {  Observable } from 'rxjs';
import { catchError, take } from 'rxjs/operators';
import { HttpHeaders,  HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { InterfacePadrao } from 'src/app/share/interface-padrao';

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
      .pipe(catchError(this.handleError)
      );
  }

  getByID(id: string): Observable<T> {
    return this.http.get<T>(`${this.URL}/${id}`)
      .pipe(
        take(1),
        catchError(this.handleError)
      );
  }


  create(source: T): Observable<T> {

    return this.http.post<T>(this.URL, source, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    })
      .pipe(
        catchError(this.handleError)
      );
  }


  update(source: T, id:string): Observable<T> {

    alert(source)
    return this.http.patch<T>(`${this.URL}/${id}`, source, {
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
        window.alert('Há um problema no servidor, estamos trabando para corrigirmos, por favor tente mais tarde');
    return throwError('Há um problema no servidor, estamos trabando para corrigirmos, por favor tente mais tarde' + errorResponse);
  }

}
