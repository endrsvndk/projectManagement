import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Project } from '../models/project.model';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  url:string ='https://localhost:44313/api/Projects';
  constructor(private httpClient:HttpClient) { }

  getProjects():Observable<Project[]>{
    return this.httpClient.get<Project[]>(this.url)
                          .pipe(catchError((err: HttpErrorResponse) => throwError(()=> new Error(err.error))));
  }

  getProjectsByCategoryId(id:number):Observable<Project[]>{
    return this.httpClient.get<Project[]>(this.url+'/'+id);
                          
  } 

  addProject(project:Project):Observable<Project>{

    /*
    güvenlik söz konusu olduğunda, aşağıdaki gibi bir header bilgisi ile post edilmeli.
    */
       let option = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': 'Bearer [JWT TOKEN]'
      })
    };

    return this.httpClient.post(this.url,project);
  }

  // addProjects(project:Project):Observable<Project>{
  //   return this.httpClient.post("https://run.mocky.io/v3/ebbf0cde-f472-400e-b33e-6c9b45193124",project);

  // }
}
