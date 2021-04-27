import { map } from 'rxjs/operators';
import { Inject, Injector, AfterContentChecked, Component } from '@angular/core';
import { InterfacePadrao } from 'src/app/share/interface-padrao';
import { CrudServico } from 'src/app/share/crud-servico';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BotaoConfirmaComponent } from 'src/app/share/botao-confirma/botao-confirma.component';

@Component({
  selector: '',
  template: '',
  styles: ['']
})
export abstract class FormularioPadrao<T extends InterfacePadrao> implements AfterContentChecked {

  //  ********************** Variáveis   **********************

  rotaVoltar!: string;
  urlAtiva!: string;
  pageTitle!: string;
  txtBtn!: string;
  formulario!: FormGroup;
  titulo!: Title;
  formValue!: T;

  //  ********************** Variáveis do inject   **********************

  protected fb: FormBuilder;
  protected route: ActivatedRoute;
  protected router: Router;
  protected dialog: MatDialog;
  protected snackBar: MatSnackBar;

  //  ********************** Construtor   **********************

  constructor(

    protected injector: Injector,
    @Inject(String) rotaVoltar: string,
    protected servico: CrudServico<T>,

  ) {
    this.route = this.injector.get(ActivatedRoute);
    this.router = this.injector.get(Router);
    this.fb = this.injector.get(FormBuilder);
    this.dialog = this.injector.get(MatDialog);
    this.snackBar = this.injector.get(MatSnackBar);
    this.rotaVoltar = rotaVoltar;  // Variável para pegar o valor do botão voltar
    this.urlAtiva = this.route.snapshot.url[0].path; //pegar id ou se é novo cadastro

  }

  //  ********************** NG After Content   **********************

  ngAfterContentChecked(): void {
    this.valorTeste();
  }

  //  ********************** Função do Botão Voltar   **********************

  voltar() {

    const dialogRef = this.dialog.open(BotaoConfirmaComponent, {
      panelClass: 'myapp-no-padding-dialog',
      data: {
        mensagem: 'Deseja realmente voltar lista?',
        botao1: 'Voltar'
      },
    });

    dialogRef.afterClosed().subscribe(
      result => {
        if (result) {
          this.router.navigate([`/${this.rotaVoltar}`]);
        }
      }
    );

  }

  //  ********************** Função de edição de Botão e cabeçalho   **********************

  valorTeste(): void {
    if (this.urlAtiva !== 'new') {
      this.pageTitle = 'Editando o formulário';
      this.txtBtn = 'Atualizar';
    } else {
      this.pageTitle = 'Criando novo formulário';
      this.txtBtn = 'Salvar';
    }
  }

  // *****************  Salvar ou Atualizar ***************

  onSubmit(): void {
    this.formValue = this.formulario.value;

    console.log(this.formulario.value);

    if (this.urlAtiva === 'new') {
      this.salvar(this.formValue);
    } else {
      let id = this.urlAtiva;
      this.atualizar(this.formValue, id);
    }
  }

  salvar(formValue: T): void {

    this.servico.create(formValue)
      .subscribe(
        () => console.log(formValue),
        // () => this.snackBar.open('Formulário salvo com sucesso', '', { duration: 2000 }),
        error => this.snackBar.open('Erro ao salvar o formulário', error, { duration: 2000 }),
        () => this.formulario.reset()
      )
  }

  atualizar(formValue: T, id: string): void {

    this.servico.update(formValue, id)
      .subscribe(
        () => this.snackBar.open('Formulário atualizado com sucesso', '', { duration: 2000 }),
        error => this.snackBar.open('Erro ao atualizar o formulário ', error, { duration: 2000 }),
        () => this.router.navigate([`/${this.rotaVoltar}`])
      )
  }

}
