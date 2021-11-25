import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor() { }

  @Input('current') project:Project

  ngOnInit(): void {
  }

  taskIsFound:boolean = false;
  totalTaskCount:number |undefined =0;

  ngAfterContentChecked():void{
    console.log('after content checked tetiklendi!')
    this.totalTaskCount = this.project.tasks?.filter(t=>!t.isCompleted).length;  
    this.taskIsFound = this.totalTaskCount != undefined && this.totalTaskCount>0
  }

}
