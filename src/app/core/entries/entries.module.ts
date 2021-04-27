import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from './../../share/primeng.module';
import { EntryListComponent } from './entry-list/entry-list.component';
import { EntryFormComponent } from './entry-form/entry-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntriesRoutingModule } from './entries-routing.module';
import { MaterialModule } from 'src/app/share/material.module';


@NgModule({
  declarations: [
    EntryFormComponent,
    EntryListComponent
  ],
  imports: [
    CommonModule,
    EntriesRoutingModule,
    PrimengModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,

  ]
})
export class EntriesModule { }
