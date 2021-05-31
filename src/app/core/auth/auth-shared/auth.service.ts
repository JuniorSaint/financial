
import { HttpClient, HttpErrorResponse,  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError, ReplaySubject, of } from 'rxjs';


import { IUser } from '../../user/user-shared/user-interface';
import { tap, map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(
    private http: HttpClient,

  ) { }

  private readonly URL = 'http://localhost:5000/auth/';

  private subUser$: ReplaySubject<IUser> = new ReplaySubject<IUser>();
    private subLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  login(credentials: {email: string, password: string}): Observable<IUser> {
    return this.http
      .post<IUser>(`${this.URL}login`, credentials)
      .pipe(
        tap((u: any) => {
          localStorage.setItem('token', u.token);
          this.subLoggedIn$.next(true);
          this.subUser$.next(u)
        })

      )
  }

  isAuthenticated(): Observable<boolean>{
    const token = localStorage.getItem('token');
    if ( token && !this.subLoggedIn$.value){
      return this.checktokenValidation();
  }
  return this.subLoggedIn$.asObservable();
  }

  checktokenValidation(): Observable<boolean> {
    return this.http.get<IUser>(`${this.URL}/user`)
    .pipe(
      tap((u:IUser) => {
        if (u) {
          this.subLoggedIn$.next(true);
          this.subUser$.next(u);
        }
      }
      ),
      map((u:IUser) => (u) ? true : false),
      catchError((error) => {
        this.logOut();
        return of(false);
      })
    );
  }

  getUser(): Observable<IUser>{
    return this.subUser$.asObservable();
  }


logOut(){
  localStorage.removeItem('token');
  this.subLoggedIn$.next(false);
  this.subUser$.next();
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
