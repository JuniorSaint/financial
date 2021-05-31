import { Component, OnDestroy, OnInit, Injector } from '@angular/core';
import { ICategory } from '../category-shared/category-interface';
import { CategoryServico } from '../category-shared/category-servico.service';
import { ListaPadrao } from 'src/app/share/lista-padrao';
@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent extends ListaPadrao<ICategory> implements OnInit, OnDestroy {

  constructor(
    protected service: CategoryServico,
    protected injector: Injector,
  ) { super ( injector, service ) }

  ngOnInit(): void {
    this.CompleteList();
  }

  //  Reiniciar o ngOnInit após inclusão 
  recicleNgOn() {
    setTimeout(() => {
      this.ngOnInit();
    }, 500);
  }

  editForm(id: string) {
    this.router.navigate([`category/${id}`]);
  }  

  // Lista de cabeçalho da tabela 
  displayedColumns: string[] = ['categoria', 'acao'];

}


