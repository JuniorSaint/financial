


import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { filter, map, reduce, tap, } from 'rxjs/operators';
import { EntryInterface } from '../entries/entry-interface';
import { Subscription } from 'rxjs';
import { ReportService } from './report.service';




@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit, OnDestroy {

  dateInicial!: Date;
  dateFinal!: Date;

  totalReceita!: number;
  totalDespesa!: Number;
  Sado!: number;
  dataSource!:EntryInterface[];
  subscription!: Subscription;

  constructor(
    private service: ReportService,
  ) {

  }

  ngOnInit(): void {
    
    this.subscription = this.service.get()
      .subscribe(
        dados => this.dataSource = dados,
        error => console.log(error),
        () => console.log('oi'+this.dataSource )

      );

  }


  generateReports() {


  }



  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
