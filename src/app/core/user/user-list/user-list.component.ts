import { debounceTime } from 'rxjs/operators';


import { ListaPadrao } from './../../../share/lista-padrao';

import { UserInterface } from '../user-shared/user-interface';
import { Component, Injector, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserService } from '../user-shared/user.service';
import {  Observable, of, Subscription } from 'rxjs';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent extends ListaPadrao<UserInterface> implements OnInit {

@ViewChild('searchBy') searchBy!: ElementRef;
subscription!: Subscription;

  constructor(

    protected servico: UserService,
    protected injector: Injector,
  ) { super(injector,  servico, ) }



  ngOnInit() {
    this.searchFilter();

    this.servico.get().subscribe(
      dados => this.dataSource$ = dados,
      erro => console.error(erro),
      () => console.log(this.dataSource$)
    )
}

// ********************** Filtro   ********************** 

filterResource(searchInput: string): Observable<UserInterface[]> {
    if (searchInput.length === 0) {
        return of([]);
    }
    return this.servico.getBySearch(searchInput)
}


searchFilter() {
    // let keyUp$ =  fromEvent(this.searchBy.nativeElement, 'keyup')
    // this.dataSource$ = keyUp$
    //     .pipe(
    //         debounceTime(500),
    //         switchMap( _ => this.filterResource(this.searchInput))
    //     )
}

  

  // ********************** Lista de cabeçalho da tabela  **********************

  displayedColumns: string[] = ['name', 'category', 'type', 'date', 'amount', 'action'];

}
