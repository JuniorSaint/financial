



import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { BotaoConfirmaComponent } from 'src/app/share/botao-confirma/botao-confirma.component';
import { CategoryInterface } from '../category-interface';
import { CategoryServico } from '../category-servico.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit, OnDestroy {

  subscription!: Subscription;

  dataSource!: CategoryInterface[];


  constructor(
    private servico: CategoryServico,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }



  ngOnInit(): void {

    this.subscription = this.servico.get()

      .subscribe(
        dados => this.dataSource = dados,
        error => console.log(error),
        () => console.log(this.dataSource)

      );

  }

  edit(id:string){
    this.router.navigate([`category/${id}`]);
  }

  // ********************** Deletar  **********************

  delete(id: string): void {

    const dialogRef = this.dialog.open(BotaoConfirmaComponent, {
      panelClass: 'myapp-no-padding-dialog',
      data: {
        mensagem: 'Deseja realmente excluir a categoria?',
        botao1: 'Excluir'
      },
    });

    dialogRef.afterClosed().subscribe(
      result => {
        if (result) {
          this.servico.delete(id)
            .subscribe(
              () => this.snackBar.open('Apagado com sucesso', '', { duration: 2000 }),
              error => this.snackBar.open('Erro ao apagar contato', '', { duration: 2000 }),
              () => this.ngOnInit()
            );
        }
      }
    );
  }




 // ********************** Lista de cabeçalho da tabela  **********************

  displayedColumns: string[] = ['categoria', 'acao'];




  // ********************** NG On Destroy  **********************

  ngOnDestroy(): void {

    this.subscription.unsubscribe();

  }
}


