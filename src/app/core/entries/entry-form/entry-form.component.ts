
import { Injector, Component, OnInit, OnDestroy } from '@angular/core';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { CategoryServico } from './../../category/category-servico.service';
import { Validators } from '@angular/forms';
import { EntryService } from '../entry.service';
import { EntryInterface } from '../entry-interface';
import { FormularioPadrao } from 'src/app/share/formulario-padrao';
import { CategoryInterface } from '../../category/category-interface';


@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.scss']
})
export class EntryFormComponent extends FormularioPadrao<EntryInterface> implements OnInit, OnDestroy {


  entryByID!: EntryInterface;
  categoria!: CategoryInterface[];
  subscription!: Subscription;


  categoria1 =[
 { _id: "60869af168d1fc660ab0e4f6", category: "21", description: "21" },
​​
 { _id: "608429231f45d531984fc3e5", category: "agora", description: "agora" },
​​
{ _id: "608609ae68d1fc660ab0e4f2", category: "fsadfa", description: "fdsfa" },
​​
{ _id: "608609fa68d1fc660ab0e4f4", category: "pela ultima", description: "pela ultima" },
​​
 { _id: "608077813c917baaa651e306", category: "tudo bem", description: "tudo bem" },
​​
{ _id: "60807c73a03e13af534c8e50", category: "vzcxv", description: "cxzvzcv" }
  ]

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
        .pipe( map((res) => res = res)

         ) 
       .subscribe(
        dados => this.categoria = dados,
        error => console.log(error),
        () => console.log(this.categoria)
      );

    this.formulario = this.fb.group({
      id: [],
      name: [null, Validators.required],
      description: [null, Validators.required],
      type: [null, Validators.required],
      amount: [null, Validators.required],
      date: [null, Validators.required],
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
              type: this.entryByID.type,
              amount: this.entryByID.amount,
              date: this.entryByID.date,
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
