import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from './../../share/primeng.module';
import { CommonModule } from '@angular/common';
import { ReportRoutingModule } from './report-routing.module';
import { MaterialModule } from 'src/app/share/material.module';
import { ReportComponent } from './report.component';
@NgModule({
  declarations: [
    ReportComponent
  ],
  imports: [
    CommonModule,
    ReportRoutingModule,
    MaterialModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule    
  ]
})
export class ReportModule { }
