import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntryFormComponent } from '../entry-form/entry-form.component';
import { EntryListComponent } from '../entry-list/entry-list.component';

const routes: Routes = [
  { path: '', component: EntryListComponent, data: { Title: 'Lançamentos'} },
  { path: 'new', component: EntryFormComponent, data: { Title: 'Cadastro Laçamento' } },
  { path: ':id', component: EntryFormComponent, data: { Title: 'Editando Lançamento'} },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntriesRoutingModule { }
