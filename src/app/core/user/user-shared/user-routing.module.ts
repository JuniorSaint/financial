import { Title } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from '../user-list/user-list.component';
import { UserFormComponent } from '../user-form/user-form.component';



const routes: Routes = [

  { path: '', component: UserListComponent, data: { Title: 'Lista de Usuários' } },
  { path: 'new', component: UserFormComponent, data: { Title: 'Cadastrand Usuário'} },
  { path: ':id', component: UserFormComponent, data: { Title: 'Editando Usuário' } }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
