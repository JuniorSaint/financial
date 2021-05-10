
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { CrudServico } from 'src/app/share/crud-servico';
import { EntryInterface } from '../entries/entry-shared/entry-interface';


@Injectable({
  providedIn: 'root'
})
export class ReportService extends CrudServico<EntryInterface>{

  constructor(
    protected injector: Injector
  ) {
    super('http://localhost:5000/entry', injector);
   }

   getByEntry():Observable<EntryInterface[]>{
    return this.http.get<EntryInterface[]>(`${this.URL}/byEntry/entryList`)
       .pipe(
         map( (dados: any) => dados = dados.result),
         catchError(this.handleError)
       );
  }

}
