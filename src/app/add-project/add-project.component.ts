import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from '../models/category.model';
import { Project } from '../models/project.model';
import { CategoryService } from '../services/category.service';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  constructor(private categoryService: CategoryService, private projectService : ProjectService) { }

  ngOnInit(): void {
    this.categoryService.getCategories()
      .subscribe((data: Category[]) => this.categories = data);
  }

  project: Project = new Project();
  categories: Category[];

  addProject(form: NgForm) {

    console.log(form);
    if (form.valid) {
      console.log('dikkat:',form.value);
      this.project = form.value;
      console.log('eklenecek proje:',this.project)
       this.projectService.addProject(this.project).subscribe((x:Project) => alert(x.name + " eklendi") );
    }

   
  }

}
