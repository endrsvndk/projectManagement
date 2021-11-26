import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from '../models/category.model';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  addCategoryForm:FormGroup
  category: Category;
  constructor(private formBuilder: FormBuilder, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.addCategoryForm = this.formBuilder.group({
      name: ['',Validators.required]
    });
  }

  checkFormData(){
    let response = this.addCategoryForm.get("name")?.hasError('required') && 
                   this.addCategoryForm.get("name")?.dirty

    console.log(response);
    return response;                     
  }

  add(){
    if (this.addCategoryForm.valid) {
      this.category = Object.assign({},this.addCategoryForm.value);
      console.log('eklenecek kategori:', this.category);
      this.categoryService.addCategory(this.category)
                          .subscribe((data:Category)=>alert(data.name + ' eklendi '));
      location = location;
    }
    else{
      this.addCategoryForm.markAllAsTouched();

    }
  }

}
