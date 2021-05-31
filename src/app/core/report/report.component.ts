import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ReportService } from './report.service';
import { IEntry } from '../entries/entry-shared/entry-interface';
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit, OnDestroy {
  totalReceita!: number;
  totalDespesa!: number;
  totalSaldo!: number;
  saldo!: number;
  dataSource$!: IEntry[];
  subscription!: Subscription;
  formulario!: FormGroup

  constructor(
    private service: ReportService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      dataInicial: ['', Validators.required],
      dataFinal: ['', Validators.required]
    });

    this.subscription = this.service.getByEntry().subscribe(
      dados => this.dataSource$ = dados,
      err => console.error(err),
      () => this.saldoGeral()
    );

  }

  saldoPeriodo(): void {
    let accReceita = 0;
    let accDespesa = 0;
    let dateInicial = this.formulario.controls['dataInicial'].value;
    let dateFinal = this.formulario.controls['dataFinal'].value;

    if (dateInicial > dateFinal) { [dateInicial, dateFinal] = [dateFinal, dateInicial] };

    for (let data of this.dataSource$) {
      if (data.dateLaunch >= dateInicial && data.dateLaunch <= dateFinal) {
        if (data.typeEntry === 'Despesa') {
          accDespesa += data.amount;
        } else {
          accReceita += data.amount;
        }
      }
    }
    this.totalDespesa = accDespesa;
    this.totalReceita = accReceita;
    this.totalSaldo = accReceita - accDespesa;
  }

  saldoGeral() {
    let accDespesa: number = 0;
    let accReceita: number = 0;

    for (let data of this.dataSource$) {
      if (data.typeEntry === 'Despesa') {
        accDespesa += data.amount;
      } else {
        accReceita += data.amount;
      }
    }
    this.saldo = accReceita - accDespesa

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
