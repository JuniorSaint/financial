import { UserService } from './../user.service';
import { UserInterface } from './../user-interface';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BotaoConfirmaComponent } from 'src/app/share/botao-confirma/botao-confirma.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  subscription!: Subscription;

  dataSource!: UserInterface[];

  constructor(
    private router: Router,
    private servico: UserService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {

    this.subscription = this.servico.get()
                        .subscribe(
                          dados => this.dataSource = dados,
                          erro => console.log(erro),
                          () => console.log(this.dataSource)

                        );

  }
novo(){
  this.router.navigate([`user/new`]);
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
