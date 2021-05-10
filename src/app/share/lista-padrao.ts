import { CrudServico } from 'src/app/share/crud-servico';
import { Component } from "@angular/core";
import { debounceTime, filter, switchMap, distinctUntilChanged } from "rxjs/operators";
import { InterfacePadrao } from './interface-padrao';




@Component({
    selector: '',
    template: '',
    styles: ['']
}) export class ListaPadrao {

    constructor(
        private service : CrudServico<InterfacePadrao>
    ){}


    filtroPeloInput$ = this.service.get()
        .pipe(
            debounceTime(300),
            filter(
                (valorDigitado) => valorDigitado.length >= 3 || !valorDigitado.length
            ),
            distinctUntilChanged(),
            // switchMap((valorDigitado) => this.acoesService.getAcoes(valorDigitado)),

        );

}
