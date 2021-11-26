import { Injectable } from '@angular/core';
declare var alertify : any;


@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }
  showMessage(message:string):void{   
    alertify.success(message);
  }
}
