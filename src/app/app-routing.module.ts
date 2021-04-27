import { ReportComponent } from './core/report/report.component';
import { PageNotFoundComponent } from './share/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: 'category', loadChildren: () => import('./core/category/category.module').then(mod => mod.CategoryModule) },
  { path: 'entry', loadChildren: () => import('./core/entries/entries.module').then(mod => mod.EntriesModule) },
  { path: 'report', loadChildren: () => import('./core/report/report.module').then(mod => mod.ReportModule) },
  { path: 'user', loadChildren: () => import('./core/user/user.module').then(mod => mod.UserModule) },
  { path: 'login', loadChildren: () => import('./core/auth/auth.module').then(mod => mod.AuthModule) },

  { path: '', component: ReportComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
