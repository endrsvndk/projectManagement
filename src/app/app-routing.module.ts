import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { CategoryMenuComponent } from './category-menu/category-menu.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login/login.guard';
import { ProjectListComponent } from './project-list/project-list.component';

const routes: Routes = [
  {path:'', component:ProjectListComponent},
  {path:'projects', component:ProjectListComponent},
  {path:'categories', component:CategoryMenuComponent},
  {path:'projects/categories/:id',component:ProjectListComponent},
  {path:'projects/addnew',component:AddProjectComponent, canActivate:[LoginGuard]},
  {path:'categories/addnew',component:AddCategoryComponent, canActivate:[LoginGuard]},
  {path:'login',component:LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
