import { CategoryServico } from './../category-servico.service';
import { Component, Injector, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormularioPadrao } from './../../../share/formulario-padrao';
import { CategoryInterface } from '../category-interface';


@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent  extends FormularioPadrao<CategoryInterface> implements OnInit  {


  formUpdate!: CategoryInterface;

  constructor(
    protected injector: Injector,
    protected servico: CategoryServico,
)
  { super(injector, 'category' , servico ); }


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


}
