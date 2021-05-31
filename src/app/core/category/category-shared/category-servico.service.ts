import { Injectable, Injector } from '@angular/core';
import { ICategory } from './category-interface';
import { CrudServico } from 'src/app/share/crud-servico';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoryServico extends CrudServico<ICategory> {

  private categorySub$ : BehaviorSubject<ICategory[]> = new BehaviorSubject<ICategory[]>([])
  private laoded: boolean = false

  constructor(
      private injector: Injector
  ) {
    super('http://localhost:5000/category', injector);
  }
}
