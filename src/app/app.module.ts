

import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GlobalErrorHandler } from './share/global-error/global-erro';
import { SharedModule } from './share/shared.module';
import { CabecalhoComponent } from './core/cabecalho/cabecalho.component';
import { MaterialModule } from './share/material.module';



// configuracao do locale pt-BR
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
registerLocaleData(ptBr);




import { CategoryModule } from './core/category/category-shared/category.module';
import { EntriesModule } from './core/entries/entry-shared/entries.module';
import { UserModule } from './core/user/user-shared/user.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './core/auth/auth.interceptor';
import { AuthModule } from './core/auth/auth-shared/auth.module';
import { StoreModule } from '@ngrx/store';



@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,


  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    EntriesModule,
    SharedModule,
    CategoryModule,
    MaterialModule,
    UserModule,
    AuthModule,
    StoreModule.forRoot({})
  ],
  providers: [
    { 
      provide: LOCALE_ID, useValue: 'pt-BR' 
    },
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
