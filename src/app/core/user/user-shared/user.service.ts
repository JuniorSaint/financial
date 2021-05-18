import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IUser } from './user-interface';
import { Injectable, Injector } from '@angular/core';

import { CrudServico } from 'src/app/share/crud-servico';

@Injectable({
  providedIn: 'root'
})
export class UserService extends CrudServico<IUser>{

  constructor(
    protected injector: Injector
  ) {
    super('http://localhost:5000/user', injector);
   }

}
