import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';
import { Projects } from '../models/mocks/project.mock';
import { Project } from '../models/project.model';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  constructor(private projectService: ProjectService,
    private activatedRoute: ActivatedRoute) { }

  searchText: string;

  projects: Project[];
  projectCount: number;

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(param => {
      console.log('parametre:', param["id"]);
      param["id"] != undefined ?
        this.projectService.getProjectsByCategoryId(param["id"])
          .subscribe((data: Project[]) => {
            this.projects = data;
            this.projectCount = this.projects.length;
          })
        :
        this.projectService.getProjects()
          .subscribe((x: Project[]) => {
            this.projects = x;
            this.projectCount = this.projects.length; 
          })
    });

    // this.projectCount = this.projects?.length;
    // console.log(this.projectCount);
    // this.projectService.getProjects()
    //   .subscribe((data: Project[]) => {
    //     this.projects = data;
    //     this.projectCount = this.projects.length;
    //   });
    //https://localhost:44313/api/Projects");



  }

  // sample(event:Event){
  //   console.log('adsds');
  //   console.log(event);
  // }

}
