import { Injectable, Injector } from '@angular/core';

import { EntryInterface } from './entry-interface';
import { CrudServico } from 'src/app/share/crud-servico';

@Injectable({
  providedIn: 'root'
})
export class EntryService extends CrudServico<EntryInterface> {

  constructor(
    private injector: Injector
  ) {
    super('http://localhost:5000/entry',  injector);
  }

}
