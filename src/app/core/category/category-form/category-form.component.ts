

import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormularioPadrao } from './../../../share/formulario-padrao';
import { CategoryListComponent } from '../category-list/category-list.component';
import { CategoryServico } from '../category-shared/category-servico.service';
import { ICategory } from '../category-shared/category-interface';
import 'moment/locale/pt-br';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent  extends FormularioPadrao<ICategory> implements OnInit  {

    @ViewChild(CategoryListComponent)  formList!: CategoryListComponent

  formUpdate!: ICategory;

  constructor(
    protected injector: Injector,
    protected servico: CategoryServico,
)
  { super(injector, 'category/new' , servico ); }


  // ********************* NG on Init  ********************

  ngOnInit(): void {

    this.popularForm();  // função de popular o forumulário

    this.formulario = this.fb.group({
      _id: [],
      category: [null, Validators.required],
      description: [null, Validators.required]
    });
  }
  



 // ********************* Função de Popular Formulário  ********************

  popularForm() {
    if (this.urlAtiva !== 'new') {
      this.servico.getByID(this.urlAtiva)
      .subscribe(
        dados =>  this.formUpdate = dados,
        error => console.log(error),
        () => {
          this.formulario.patchValue({
            _id: this.formUpdate.id,
            category: this.formUpdate.category,
            description: this.formUpdate.description
        }
        )
      })
    }

  }

   // ********************* Limpar Campos do formulário ********************

  clearFields(){
    this.formulario.reset();
  }

   // ********************* Sobrepondo ao método de salvar  ********************

  salvar(formValue: ICategory): void {

    this.servico.create(formValue)
      .subscribe(
        () => this.snackBar.open('Formulário salvo com sucesso', '', { duration: 2000 }),
        error => this.snackBar.open('Erro ao salvar o formulário', error, { duration: 2000 }),
        () => this.ngOnInit()
      )
        this.formList.recicleNgOn();
  }


}
