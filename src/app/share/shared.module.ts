
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BotaoConfirmaComponent } from 'src/app/share/botao-confirma/botao-confirma.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { MaterialModule } from './material.module';
import { PrimengModule } from './primeng.module';

@NgModule({
  declarations: [
    BotaoConfirmaComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PrimengModule
  ]
})
export class SharedModule { }
