import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../auth.service';
import { LoginService } from '../service/login/login.service';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

// const sign_in_btn = document.querySelector('#sign-in-btn');
// const sign_up_btn = document.querySelector("#sign-up-btn");
// const container = document.querySelector(".container");

// sign_up_btn.addEventListener("click",  e => {
//   container.classList.add("sign-up-mode")
// })

 //public authService: AuthService

  constructor( public authService: AngularFireAuth,private auth:AuthService, private LoginService:LoginService) { }
 islogin:boolean
   ngOnInit(): void {
    this.islogin=true;  
  }
  change(){
    this.islogin=!this.islogin;
    debugger
  }
  loginGoogel(){
    this.auth.loginWithGoogel();
    debugger;
  }

}
