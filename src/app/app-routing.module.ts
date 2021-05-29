import { Title } from '@angular/platform-browser';
import { LoginComponent } from './core/auth/login/login.component';

import { ReportComponent } from './core/report/report.component';
import { PageNotFoundComponent } from './share/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [

  { path: 'category', loadChildren: () => import('./core/category/category-shared/category.module').then(mod => mod.CategoryModule) },
  { path: 'entry', loadChildren: () => import('./core/entries/entry-shared/entries.module').then(mod => mod.EntriesModule) },
  { path: 'report', loadChildren: () => import('./core/report/report.module').then(mod => mod.ReportModule) },
  { path: 'user', loadChildren: () => import('./core/user/user-shared/user.module').then(mod => mod.UserModule) },
  { path: 'auth', loadChildren: () => import('./core/auth/auth-shared/auth.module').then(mod => mod.AuthModule) },


  { path: 'login', component: LoginComponent, data: { Title: 'Login' } },
  { path: 'report', component: ReportComponent, data: { Title: 'Relatório' } },
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  { path: '**', component: PageNotFoundComponent, data: { Title: 'Page Not Found' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
