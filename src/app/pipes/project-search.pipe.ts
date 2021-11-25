import { Pipe, PipeTransform } from '@angular/core';
import { Project } from '../models/project.model';

@Pipe({
  name: 'projectSearch'
})
export class ProjectSearchPipe implements PipeTransform {

  transform(value: Project[], searchString:string): Project[] {
    return searchString !== undefined ?
           value.filter(pr=>pr.name?.toLowerCase().includes(searchString.toLowerCase()))
           :
           value;
  }

}
