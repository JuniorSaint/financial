
import { PrimengModule } from './../../../share/primeng.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from 'src/app/share/material.module';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from '../login/login.component';
import { AuthInterceptor } from '../auth.interceptor';


@NgModule({
  declarations: [
    LoginComponent,


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
export class AuthModule {

  static forRoot():any{
    return {
      NgModule: AuthModule,
      providers: [
        AuthInterceptor
      ]
    }
  }

 }
