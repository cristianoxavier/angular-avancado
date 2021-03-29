import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryFormComponent } from '../categories/category-form/category-form.component'
import { CategoryListComponent } from '../categories/category-list/category-list.component'

const routes: Routes = [
  {path: '', component: CategoryListComponent},
  {path: ':id', component: CategoryFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
