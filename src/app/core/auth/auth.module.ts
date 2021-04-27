
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from './../../share/primeng.module';
import { MaterialModule } from 'src/app/share/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,

  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    PrimengModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AuthModule { }
