import { NgModule } from '@angular/core';
import { UserFormComponent } from './../../user/user-form/user-form.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
  { path: 'auth/login', component: LoginComponent, data: { Title: 'Login' } },
  { path: 'auth/register', component: UserFormComponent, data: { Title: 'Registro de Usuário'} }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
