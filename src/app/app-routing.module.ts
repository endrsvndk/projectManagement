import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { CategoryMenuComponent } from './category-menu/category-menu.component';
import { ProjectListComponent } from './project-list/project-list.component';

const routes: Routes = [
  {path:'', component:ProjectListComponent},
  {path:'projects', component:ProjectListComponent},
  {path:'categories', component:CategoryMenuComponent},
  {path:'projects/categories/:id',component:ProjectListComponent},
  {path:'projects/addnew',component:AddProjectComponent},
  {path:'categories/addnew',component:AddCategoryComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
