import { ViewportScroller } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import firebase from "firebase/app";
// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 constructor(private viewportScroller:ViewportScroller){}
 onClickScroll(elementId:string):void{this.viewportScroller.scrollToAnchor(elementId)}
   myFunction(): void {
    var x = document.getElementById("myTopnav");
     if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
 }
navIsUp:boolean=false;
@HostListener('window:scroll', ['$event']) 
onScroll(event){
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 0)
  {
   this.navIsUp=true
  }
  else {
  this.navIsUp=false;
  }
}
toggleFunction() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
  } else {
      x.className = x.className.replace(" w3-show", "");
  }
}





}
