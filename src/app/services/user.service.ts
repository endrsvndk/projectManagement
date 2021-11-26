import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from '../models/userLogin.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isValid:boolean = false;
  returnUrl:string;

  

  validateUser(userLogin:UserLogin){
     if (userLogin.userName == "user1" && userLogin.password=="123456") {
        this.isValid = true;
        if (this.returnUrl !== undefined) {
           this.router.navigate([this.returnUrl]);
        }
     }
  }

  logOut(){
    this.isValid = false;
  }

  constructor(private router:Router) { }
}
