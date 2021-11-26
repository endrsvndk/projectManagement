import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../models/userLogin.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserService) { }
  userLogin: UserLogin = new UserLogin(); 
  ngOnInit(): void {
  }

  login(){
    console.log('Giriş yapacak:',this.userLogin);
    this.userService.validateUser(this.userLogin);
  }

}


