
import { Component, OnInit, Injector, ViewChild, ElementRef, Inject } from "@angular/core";
import { debounceTime, filter, switchMap, distinctUntilChanged } from "rxjs/operators";
import { InterfacePadrao } from './interface-padrao';
import { fromEvent, Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { BotaoConfirmaComponent } from './botao-confirma/botao-confirma.component';
import { CrudServico } from 'src/app/share/crud-servico';

@Component({
    selector: '',
    template: '',
    styles: ['']
}) export abstract class ListaPadrao<T extends InterfacePadrao> implements OnInit {

    searchInput!: string;
    dataSource$!: T[];
 

    //  ********************** Variáveis do inject   **********************

    protected router: Router;
    protected dialog: MatDialog;
    protected snackBar: MatSnackBar;


    constructor(
        protected injector: Injector,
        protected servico: CrudServico<T>
        // @Inject(ElementRef) searchBy: ElementRef,
    ) {
        this.router = this.injector.get(Router);
        this.dialog = this.injector.get(MatDialog);
        this.snackBar = this.injector.get(MatSnackBar);
        // this.searchBy = searchBy; 

    }

    // ********************** ngOnInit   ********************** 
    ngOnInit() {

    }

    // ********************** btn Criar novo   **********************

    novo() {
        this.router.navigate([`user/new`]);
    }


    // ********************** Deletar  **********************

    delete(id: any): void {

        const dialogRef = this.dialog.open(BotaoConfirmaComponent, {
            panelClass: 'myapp-no-padding-dialog',
            data: {
                mensagem: 'Deseja realmente excluir?',
                botao1: 'Excluir'
            },
        });

        dialogRef.afterClosed().subscribe(
            result => {
                if (result) {
                    this.servico.delete(id)
                        .subscribe(
                            () => this.snackBar.open('Apagado com sucesso', '', { duration: 2000 }),
                            error => this.snackBar.open(`Erro ao deletar ${error}`, '', { duration: 2000 }),
                            () => this.ngOnInit()
                        );
                }
            }
        );
    }


}
