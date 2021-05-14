import { UserListComponent } from './../user-list/user-list.component';
import { UserFormComponent } from './../user-form/user-form.component';





import { MaterialModule } from 'src/app/share/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {IMaskModule} from 'angular-imask';
import { PrimengModule } from 'src/app/share/primeng.module';


@NgModule({
  declarations: [
      UserFormComponent,
      UserListComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule,
    IMaskModule,
  ]
})
export class UserModule { }
