import { Injectable, Injector } from '@angular/core';

import { EntryInterface } from './entry-interface';
import { CrudServico } from 'src/app/share/crud-servico';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EntryService extends CrudServico<EntryInterface> {

  constructor(
    private injector: Injector
  ) {
    super('http://localhost:5000/entry',  injector);
  }


  getByDate(dateIn:Date, DateEnd:Date): Observable<EntryInterface> {
    return this.http.get<EntryInterface>(`${this.URL}/dataLaunch/${dateIn}/${DateEnd}`)
      .pipe(
        map( ( dados:any) => dados = dados.result),
        catchError(this.handleError)
      );
  }

}


