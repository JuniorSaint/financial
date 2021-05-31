import { Injectable, Injector } from '@angular/core';
import { IEntry } from './entry-interface';
import { CrudServico } from 'src/app/share/crud-servico';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EntryService extends CrudServico<IEntry> {

  constructor(
    private injector: Injector
  ) {
    super('http://localhost:5000/entry',  injector);
  }

  getByDate(dateIn:Date, DateEnd:Date): Observable<IEntry> {
    return this.http.get<IEntry>(`${this.URL}/dataLaunch/${dateIn}/${DateEnd}`)
      .pipe(
        map( ( dados:any) => dados = dados.result),
        catchError(this.handleError)
      );
  }
}


