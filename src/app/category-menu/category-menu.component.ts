import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category.model';
import { categories } from '../models/mocks/category.mock';


@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.css']
})
export class CategoryMenuComponent implements OnInit {

  constructor() { }

  categories:Category[] = categories;

  ngOnInit(): void {
  }

}
