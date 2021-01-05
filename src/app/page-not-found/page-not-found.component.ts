import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
// implements OnInit
export class PageNotFoundComponent  {
 //public authService: AuthService
  constructor() { }
  showDate=false
  value:string="";
  ngOnInit(): void {
  }
  // style.display='block'"
  openModol(){}
}
