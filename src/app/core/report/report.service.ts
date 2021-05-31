import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { CrudServico } from 'src/app/share/crud-servico';
import { IEntry } from '../entries/entry-shared/entry-interface';
@Injectable({
  providedIn: 'root'
})
export class ReportService extends CrudServico<IEntry>{

  constructor(
    protected injector: Injector
  ) {
    super('http://localhost:5000/entry', injector);
   }

   getByEntry():Observable<IEntry[]>{
    return this.http.get<IEntry[]>(`${this.URL}/byEntry/entryList`)
       .pipe(
         map( (dados: any) => dados = dados.result),
         catchError(this.handleError)
       );
  }
}
