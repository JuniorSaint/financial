
import { PrimengModule } from './../../share/primeng.module';
import { MaterialModule } from 'src/app/share/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {IMaskModule} from 'angular-imask';

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
