import { debounceTime } from 'rxjs/operators';


import { ListaPadrao } from './../../../share/lista-padrao';

import { IUser } from '../user-shared/user-interface';
import { Component, Injector, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserService } from '../user-shared/user.service';
import { Observable, of, Subscription } from 'rxjs';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent extends ListaPadrao<IUser> implements OnInit {

  @ViewChild('searchBy') searchBy!: ElementRef;
  subscription!: Subscription;

  constructor(

    protected servico: UserService,
    protected injector: Injector,
  ) { super(injector, servico,) }



  ngOnInit() {


    this.CompleteList();
  }

  // ********************** Filtro   ********************** 

  filterResource(searchInput: string): Observable<IUser[]> {
    if (searchInput.length === 0) {
      return of([]);
    }
    return this.servico.getBySearch(searchInput)
  }






  // ********************** Lista de cabeçalho da tabela  **********************

  displayedColumns: string[] = ['name', 'category', 'type', 'date', 'amount', 'action'];




}
