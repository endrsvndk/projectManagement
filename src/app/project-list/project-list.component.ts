import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Projects } from '../models/mocks/project.mock';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  searchText: string;

  projects: Project[];
  projectCount: number;

  ngOnInit(): void {
    this.projectCount = this.projects?.length;
    console.log(this.projectCount);
    this.httpClient.get<Project[]>("https://run.mocky.io/v3/ebbf0cde-f472-400e-b33e-6c9b45193124")
      .pipe(tap(x => console.log(x)))
      .subscribe((data: Project[]) => {
        this.projects = data;
        this.projectCount = this.projects.length;

      });

    console.log('projects: ' + this.projects);
    //https://localhost:44313/api/Projects");



  }

  // sample(event:Event){
  //   console.log('adsds');
  //   console.log(event);
  // }

}
