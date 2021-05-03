
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material.module';
import { PrimengModule } from './primeng.module';
import { BotaoConfirmaComponent } from './botao-confirma/botao-confirma.component';





@NgModule({
  declarations: [
    BotaoConfirmaComponent,

  ],
  imports: [
    CommonModule,
    MaterialModule,
    PrimengModule,
    

  ]
})
export class SharedModule { }
