import { NgModule } from '@angular/core';
import { PrimengModule } from './../../../share/primeng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EntriesRoutingModule } from './entries-routing.module';
import { MaterialModule } from 'src/app/share/material.module';
import { EntryListComponent } from '../entry-list/entry-list.component';
import { EntryFormComponent } from '../entry-form/entry-form.component';
import { SharedModule } from 'src/app/share/shared.module';
@NgModule({
  declarations: [
    EntryFormComponent,
    EntryListComponent
  ],
  imports: [
    CommonModule,
    EntriesRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    PrimengModule
  ]
})
export class EntriesModule { }
