import { EntryService } from './../entries/entry.service';
import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { filter, map, reduce, tap, } from 'rxjs/operators';
import { EntryInterface } from '../entries/entry-interface';
import { Subscription } from 'rxjs';



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
  entry!: {};
  subscription!: Subscription;

  constructor(
    private service: EntryService,
  ) {

  }

  ngOnInit(): void {
    this.subscription = this.service.get()
      .pipe(

        map(dados => dados.filter(dados =>{this.dateFinal >= dados.dateLaunch   && this.dateFinal <= dados.dateLaunch ,
          console.log(dados.dateLaunch, this.dateFinal)
        } ),

        ),
      )
      .subscribe(dados => this.entry = dados,
        error => console.log(error),
        () => console.log(this.entry)
      );

  }


  generateReports() {

    console.log(this.entry)
    console.log(this.dateInicial, this.dateFinal)

  }



  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
