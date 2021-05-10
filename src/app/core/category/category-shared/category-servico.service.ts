import { Injectable, Injector } from '@angular/core';

import { CategoryInterface } from './category-interface';
import { CrudServico } from 'src/app/share/crud-servico';


@Injectable({
  providedIn: 'root'
})
export class CategoryServico extends CrudServico<CategoryInterface> {


  constructor(
      private injector: Injector
  ) {
    super('http://localhost:5000/category', injector);
  }

}
