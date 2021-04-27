import { EntryInterface } from './../entries/entry-interface';
import { CrudServico } from 'src/app/share/crud-servico';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReportService extends CrudServico<EntryInterface> {




constructor(
  private injector: Injector
) {  
  super('http://localhost:5000/entry', injector)
}

getMovByDate(dataIn: Date, dateFim: Date): Observable<EntryInterface[]> {
  return this.http.get<EntryInterface[]>(`${this.URL}/${dataIn} ${dateFim}`)
    .pipe(catchError(this.handleError)
    );
}

}
