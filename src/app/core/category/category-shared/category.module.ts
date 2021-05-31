import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryRoutingModule } from './category-routing.module';
import { MaterialModule } from 'src/app/share/material.module';
import { PrimengModule } from 'src/app/share/primeng.module';
import { CategoryListComponent } from '../category-list/category-list.component';
import { CategoryFormComponent } from './../category-form/category-form.component';
@NgModule({
  declarations: [
    CategoryListComponent,
    CategoryFormComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    PrimengModule,
  ]
})
export class CategoryModule { }
