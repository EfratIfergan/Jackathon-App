import { Injectable } from '@angular/core';
import { Users } from 'src/app/classes/Users';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  //משתנה שישמור את המשתמש שמתחבר
  User:Users=new Users()
  constructor() { }



}
