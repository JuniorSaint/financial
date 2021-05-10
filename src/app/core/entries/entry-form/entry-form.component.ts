
import { Injector, Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { Validators } from '@angular/forms';

import { FormularioPadrao } from 'src/app/share/formulario-padrao';
import { CategoryInterface } from '../../category/category-shared/category-interface';
import { CategoryServico } from '../../category/category-shared/category-servico.service';
import { EntryInterface } from '../entry-shared/entry-interface';
import { EntryService } from '../entry-shared/entry.service';
import * as moment from 'moment';
import 'moment/locale/pt-br';

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.scss']
})
export class EntryFormComponent extends FormularioPadrao<EntryInterface> implements OnInit, OnDestroy {


  entryByID!: EntryInterface;
  categoria!: CategoryInterface[];
  subscription!: Subscription;




  simNao = [
    { label: 'Sim', value: true },
    { label: 'Não', value: false }
  ];

  tipoLanc = [
    'Despesa', 'Receita'
  ];

  // ********************* Constructor  ********************

  constructor(
    protected injector: Injector,
    protected service: EntryService,
    protected serviceCat: CategoryServico,

  ) {
    super(injector, 'entry', service)
  }

  // ********************* NG OnInit  ********************

  ngOnInit(): void {

    this.popularForm();  // função de popular o forumulário

    this.subscription = this.serviceCat.get()
       .subscribe(
        dados => this.categoria = dados,
        error => console.log(error),
        () => console.log(this.categoria)
      );

    this.formulario = this.fb.group({
      id: [],
      name: [null, Validators.required],
      description: [null, Validators.required],
      typeEntry: [null, Validators.required],
      amount: [null, Validators.required],
      dateLaunch: ['', Validators.required],
      paid: [null, Validators.required],
      category: [null, Validators.required]
    });

  }

  // ********************* Função de Popular Formulário  ********************

  popularForm() {
    if (this.urlAtiva !== 'new') {

      this.service.getByID(this.urlAtiva)
        .subscribe(
          dados => {
            this.entryByID = dados,
            console.log(dados)
          },
          error => console.log(error),
          () => {
            this.formulario.patchValue({
              id: this.entryByID.id,
              name: this.entryByID.name,
              description: this.entryByID.description,
              typeEntry: this.entryByID.typeEntry,
              amount: this.entryByID.amount,
              dateLaunch: this.entryByID.dateLaunch,
              paid: this.entryByID.paid,
              category: this.entryByID.category
            }
            )
          })
    }

  }

  // ********************* NG OnDestroy  ********************

  ngOnDestroy() {

    this.subscription.unsubscribe();

  }

}
