import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth-shared/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: AuthService,
    private router: Router,
    private snack: MatSnackBar

  ) { }

  hide = true;

  ngOnInit(): void {

    this.formulario = this.fb.group({
      email: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  onSubmit(){
    const credentials = this.formulario.value;

    this.service.login(credentials)
    .subscribe(
      user => {
        this.snack.open(`Logado com sucesso, Seja bem vindo' + ${user.login} !`, 'OK', {duration: 4000}),
        this.router.navigate(['report']);
      },
      err => {
        this.snack.open(`houve problema ao logar, tente novamente !`, 'OK', {duration: 2000}),
        console.error(err);
      }
    );
  }

}
