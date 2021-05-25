import { ConfiguracaoDate } from './../../share/configuracao-date';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';
import { ReportService } from './report.service';
import { IEntry } from '../entries/entry-shared/entry-interface';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent extends ConfiguracaoDate implements OnInit, OnDestroy {


  //***************************** Variáveis ********************/
  totalReceita!: number;
  totalDespesa!: number;
  totalSaldo!: number;
  saldo!: number;
  dataSource$!: IEntry[];
  subscription!: Subscription;
  formulario!: FormGroup

  //***************************** Constructor ********************/

  constructor(
    private service: ReportService,
    private fb: FormBuilder,
    
  ) { super()

  }

  //***************************** ngOnInit ********************/

  ngOnInit(): void {

    this.formulario = this.fb.group({
      dataInicial: ['', Validators.required],
      dataFinal: ['', Validators.required]
    });

    this.subscription = this.service.getByEntry().subscribe(
      dados => this.dataSource$ = dados,
      err => console.error(err),
      () =>this.saldoFn()
    );
  }

  //***************************** Saldo por período ********************/

  saldoPeriodo(): void {


    let accReceita = 0;
    let accDespesa = 0;
    let dateInicial = this.formulario.controls['dataInicial'].value;
    let dateFinal = this.formulario.controls['dataFinal'].value;

    console.log(dateInicial, dateFinal);

    if (dateInicial > dateFinal) {
      [ dateInicial, dateFinal] = [dateFinal, dateInicial] 

      console.log(`data inicial ${dateInicial} e data final ${dateFinal}`);

      for (let data of this.dataSource$) {


        if (data.dateLaunch >= dateInicial && data.dateLaunch <= dateFinal) {


          if (data.typeEntry === 'Despesa') {
            accDespesa += data.amount;

          } else {
            accReceita += data.amount;

          }
        }
      }
    } else {
      
      for (let data of this.dataSource$) {
  
        if (data.dateLaunch >= dateInicial && data.dateLaunch <= dateFinal) {
            console.log(data.dateLaunch);
          if (data.typeEntry === 'Despesa') {
            accDespesa += data.amount;
          } else {
            accReceita += data.amount;
          }
        }
      }
    }

    this.totalDespesa = accDespesa;
    this.totalReceita = accReceita;
    this.totalSaldo = accReceita - accDespesa;

  } 



//***************************** Saldo Total ********************/

saldoFn() {

  let desVinda: number = 0;
  let recVinda: number = 0;

  for (let data of this.dataSource$) {
    if (data.typeEntry === 'Despesa') {
      desVinda += data.amount;
    } else {
      recVinda += data.amount;
    }

  }
  return console.log(this.saldo = recVinda - desVinda);
}

//***************************** ngOnDestroy ********************/

ngOnDestroy() {
  this.subscription.unsubscribe();
}

}
