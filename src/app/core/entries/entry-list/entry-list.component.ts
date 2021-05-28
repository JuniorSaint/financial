import { ICategory } from 'src/app/core/category/category-shared/category-interface';
import { CategoryServico } from './../../category/category-shared/category-servico.service';
import { Component, OnInit, Injector, ElementRef, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { ListaPadrao } from 'src/app/share/lista-padrao';
import { IEntry } from '../entry-shared/entry-interface';
import { EntryService } from '../entry-shared/entry.service';


@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent extends ListaPadrao<IEntry> implements OnInit {


  subscription2!: Subscription;
  categoryL!: ICategory[];
  vlrId!: string;

  constructor(
    protected service: EntryService,
    protected injector: Injector,
    private serviceCat: CategoryServico

  ) { super(injector, service ) }



  ngOnInit(): void {
    this.subscription2 = this.serviceCat.get().subscribe(dado => this.categoryL = dado, erro => console.error(erro), () => console.log(this.categoryL));
    this.CompleteList();
    this.valorTrocaCategory();

  }
valorTrocaCategory(){



  // console.log(` cat ${}`);

  
}
  


 // ********************** Lista de cabeçalho da tabela  **********************

  displayedColumns: string[] = ['name',   'category', 'type','date', 'amount','action'];




  // ********************** NG On Destroy  **********************
ngOnDestroy(){
  this.subscription2.unsubscribe();
}

}


