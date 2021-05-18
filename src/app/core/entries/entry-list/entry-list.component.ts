import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { BotaoConfirmaComponent } from 'src/app/share/botao-confirma/botao-confirma.component';
import { IEntry } from '../entry-shared/entry-interface';
import { EntryService } from '../entry-shared/entry.service';


@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {

  subscription!: Subscription;

  dataSource!: IEntry[];


  constructor(
    private servico: EntryService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,

  ) { }



  ngOnInit(): void {



    this.subscription = this.servico.get()
      .subscribe(
        dados => this.dataSource = dados,
        error => console.log(error),
        () => console.log(this.dataSource )

      );

  }

  // ********************** Deletar  **********************

  delete(id: string): void {

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
              error => this.snackBar.open(`Erro ao deletar ${ error }`, '', { duration: 2000 }),
              () => this.ngOnInit()
            );
        }
      }
    );
  }


 // ********************** Lista de cabeçalho da tabela  **********************

  displayedColumns: string[] = ['name',   'category', 'type','date', 'amount','action'];




  // ********************** NG On Destroy  **********************

  ngOnDestroy(): void {

    this.subscription.unsubscribe();

  }
}


