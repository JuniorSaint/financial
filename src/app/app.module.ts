import { SharedModule } from './share/shared.module';
import { NgModule } from '@angular/core';
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
    AuthModule

  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
