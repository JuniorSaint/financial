import { GlobalErrorHandler } from './share/global-error/global-erro';
import { SharedModule } from './share/shared.module';
import { ErrorHandler, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { CategoryModule } from './core/category/category.module';
import { CabecalhoComponent } from './core/cabecalho/cabecalho.component';



import { EntriesModule } from './core/entries/entries.module';
import { MaterialModule } from './share/material.module';
import { UserModule } from './core/user/user.module';
import { AuthModule } from './core/auth/auth.module';

// configuracao do locale pt-BR
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
registerLocaleData(ptBr);


import { PageNotFoundComponent } from './share/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    PageNotFoundComponent,

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
    AuthModule

  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
