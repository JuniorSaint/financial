
import { Component, OnInit, Injector } from '@angular/core';
import { FormArray, FormGroup, Validators } from '@angular/forms';
import { FormularioPadrao } from 'src/app/share/formulario-padrao';
import { UserInterface } from '../user-interface';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent  extends FormularioPadrao<UserInterface> implements OnInit {

  formUpdate!: UserInterface;
  matchingOut!: boolean;

  optionSocial = [
    { social: "Whatsapp", value: "whatsapp"},
    { social: "Telegram", value: "telegram" },
    { social: "Signal", value: "signal" }
  ]

  typoPhone = [
    {tipo: "Fixo", value: "fixo"},
    {tipo: "Celular", value: "celular"}
  ]

  typeUser = [
    { tipU: "Administrador", value: "administrator" },
    { tipU: "Usuário", value: "user" }
  ]

  activeUser = [
    { acUser: "Ativo", value: true  },
    { acUser: "Inativo", value: false  }
  ]

  constructor(
    protected injector : Injector,
    protected servico: UserService
  ) {
    super(injector,'user' , servico)
  }

  // ********************* NG on Init  ********************

  ngOnInit(): void {



    this.popularForm();  // função de popular o forumulário

    this.formulario = this.fb.group({
      _id: [],
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      phone: this.fb.array([this.addPhone()]),
      login: [null, Validators.required],
      password: [null, [Validators.required, Validators.minLength(6)]],
      repPassword : [null, [Validators.required, Validators.minLength(6)]],
      active: [null, Validators.required],
      userKind: [null, Validators.required]
    }, { Validator: this.matchingPassword });
  }

   // ********************* Comparação de passaword  ********************

  matchingPassword(group: FormGroup){

    if(group) {
      const pass = group.controls['password'].value;
      const rePass = group.controls['rePassword'].value;
      if(pass === rePass){
        this.matchingOut = true;

      }
    }
    return { matching: false}


  }


   // ********************* Função de Popular Formulário  ********************

   popularForm() {
    if (this.urlAtiva !== 'new') {
      this.servico.getByID(this.urlAtiva)
      .subscribe(
        dados =>  this.formUpdate = dados,
        error => console.log(error),
        () => {
          this.formulario.patchValue({
            _id: this.formUpdate._id,
            name: this.formUpdate.name,
            phone: this.fb.array([this.addPhone()]),
            email: this.formUpdate.email,
            login: this.formUpdate.login,
            password: this.formUpdate.password,
            repPassword : this.formUpdate.repPassword,
            active: this.formUpdate.active,
            userKind: this.formUpdate.userKind,
        }
        )
      })
    }

  }

  // Inicio para adicionar telefone

  addPhone(): FormGroup {
    return this.fb.group({
      phoneType: [null],
      phoneNumber: [null],
      social: [null]
    });
  }


  newPhone(): void {
    this.phoneFormControl.push(this.addPhone());
  }

  removeTelefone(i:any): void {
    this.phoneFormControl.removeAt(i);
  }

  get phoneFormControl(): FormArray {
    return this.formulario.get('phone') as FormArray;
  }

}