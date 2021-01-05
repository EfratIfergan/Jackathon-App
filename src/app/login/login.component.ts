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
  changeValue:boolean;

  islogin:boolean
   ngOnInit(): void {
   this.islogin=true;
   this.changeValue=false;
  }
  change(){
    debugger
  this.islogin=!this.islogin;
      debugger
  }
  changeValue1(){
    debugger
    this.changeValue=true;
  }


}
