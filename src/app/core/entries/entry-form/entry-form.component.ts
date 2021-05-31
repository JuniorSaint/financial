
import { Injector, Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Validators } from '@angular/forms';
import { FormularioPadrao } from 'src/app/share/formulario-padrao';
import { ICategory } from '../../category/category-shared/category-interface';
import { CategoryServico } from '../../category/category-shared/category-servico.service';
import { IEntry } from '../entry-shared/entry-interface';
import { format } from 'date-fns'
import { EntryService } from '../entry-shared/entry.service';
@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.scss']
})
export class EntryFormComponent extends FormularioPadrao<IEntry> implements OnInit, OnDestroy {
  formUpdate!: IEntry;
  categoria!: ICategory[];
  subscription2!: Subscription;

  simNao = [
    { label: 'Sim', value: true },
    { label: 'Não', value: false }
  ];

  tipoLanc = [
    'Despesa', 'Receita'
  ];

  constructor(
    protected injector: Injector,
    protected service: EntryService,
    protected serviceCat: CategoryServico,

  ) {
    super(injector, 'entry', service)
  }

  ngOnInit(): void {
    this.subscription2 = this.serviceCat.get()
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
      dateLaunch: [format(new Date, 'dd/MM/yyyy' ), Validators.required],
      paid: [null, Validators.required],
      category: [null, Validators.required]
    });

    this.popularForm();
  }

  // Função de Popular Formulário
  popularForm() {
    if (this.urlAtiva !== 'new') {
      this.service.getByID(this.urlAtiva)
        .subscribe(
          dados => {
            this.formUpdate = dados,
            console.log(dados)
          },
          error => console.log(error),
          () => {
            this.patchFormUpdate(this.formUpdate)
          })
    }
  }

  patchFormUpdate(formUpdate: IEntry) {
    this.formulario.patchValue({
      id: this.formUpdate.id,
      name: this.formUpdate.name,
      description: this.formUpdate.description,
      typeEntry: this.formUpdate.typeEntry,
      amount: this.formUpdate.amount,
      dateLaunch: this.formUpdate.dateLaunch,
      paid: this.formUpdate.paid,
      category: this.formUpdate.category
    })
  }  

  ngOnDestroy() {
    this.subscription2.unsubscribe();
  }
}
