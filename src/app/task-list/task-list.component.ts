import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../models/project.model';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor() { }

  @Input() project: Project;
  ngOnInit(): void {
  }

}
