
import { Component, OnInit, Injector, ViewChild, ElementRef, Inject } from "@angular/core";
import { InterfacePadrao } from './interface-padrao';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { BotaoConfirmaComponent } from './botao-confirma/botao-confirma.component';
import { CrudServico } from 'src/app/share/crud-servico';
import { Subscription } from "rxjs";

@Component({
    selector: '',
    template: '',
    styles: ['']
}) export abstract class ListaPadrao<T extends InterfacePadrao> implements OnInit {

    searchInput!: string;
    dataSource$!: T[];
    subscription!: Subscription;
 

    //  ********************** Variáveis do inject   **********************

    protected router: Router;
    protected dialog: MatDialog;
    protected snackBar: MatSnackBar;


    constructor(
        protected injector: Injector,
        protected service: CrudServico<T>
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
                    this.service.delete(id)
                        .subscribe(
                            () => this.snackBar.open('Apagado com sucesso', '', { duration: 2000 }),
                            error => this.snackBar.open(`Erro ao deletar ${error}`, '', { duration: 2000 }),
                            () => this.ngOnInit()
                        );
                }
            }
        );
    }
    // ********************** lista do componente   ********************** 

    CompleteList() {
        this.subscription = this.service.get()
            .subscribe(
                dados => this.dataSource$ = dados,
                erro => console.error(erro),
            );
    }

    // ********************** ngOnDestroy  ********************** 
    
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }


}
