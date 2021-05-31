import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryFormComponent } from '../category-form/category-form.component';

const routes: Routes = [
  { path: '', component: CategoryFormComponent, data: { Title: 'Categoria' }},
  { path: 'new', component: CategoryFormComponent, data: { Title: 'Cadastro Categoria' } },
  { path: ':id', component: CategoryFormComponent , data: { Title: 'Editanto Categoria' }}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
