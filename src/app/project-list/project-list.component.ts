import { Component, OnInit } from '@angular/core';
import { Projects } from '../models/mocks/project.mock';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  constructor() { }

  projects: Project[] = Projects;

  ngOnInit(): void {
  }

}
