import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderPadraoModule } from './hearder-padrao/header-padrao.module';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { PrimengModule } from './primeng.module';
import { BotaoConfirmaComponent } from './botao-confirma/botao-confirma.component';
@NgModule({
  declarations: [
    BotaoConfirmaComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PrimengModule,
    HeaderPadraoModule,
  ],
  exports:[
    HeaderPadraoModule,
    PrimengModule,
    MaterialModule,
  ]
})
export class SharedModule { }
