
import { HttpClient, HttpErrorResponse,  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';


import { UserInterface } from '../../user/user-shared/user-interface';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(
    private http: HttpClient,

  ) { }

  private readonly URL = 'http://localhost:5000/auth/';

  // private subUser: BehaviorSubject<UserInterface> = new BehaviorSubject('');
    // private subLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject(false);

  login(credentials: {email: string, password: string}): Observable<UserInterface> {
    return this.http
      .post<UserInterface>(`${this.URL}login`, credentials)
      .pipe(
        tap((u: any) => {
          localStorage.setItem('token', u.token);
        })

      )
  }


logOut(){
  localStorage.removeItem('token');
}




    // **************  Tratamento de erro *****************

    public handleError(errorResponse: HttpErrorResponse) {
      if (errorResponse.error instanceof ErrorEvent) {
        console.error('Client Side Error :', errorResponse.error.message);
      } else {
        console.error('Server Side Error :', errorResponse);
      }
          window.alert('Há um problema no servidor, estamos trabando para corrigirmos, por favor tente mais tarde');
      return throwError(errorResponse.error.message);
    }

}
