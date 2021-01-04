import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor( private LoginService:LoginService) { }
  logIn = true;
  islogin:boolean
   ngOnInit(): void {
   this.islogin=true;
  }
  change(){
    debugger
  this.islogin=!this.islogin;
      debugger
  }


}
