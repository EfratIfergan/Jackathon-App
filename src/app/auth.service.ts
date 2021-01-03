import { Injectable } from '@angular/core';
 import firebase from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth, ) { 
   
  }
   
loginWithGoogel(){
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider).then( 
    result => {
     const user = firebase.auth().currentUser;
       alert("Hello "+user.displayName+user.photoURL)
        console.log("Test console output");   
}).catch( error => console.log("Error occured in signin"));
}

 }
//Sign in with Google
// GoogleAuth() {
// return this.AuthLogin(new auth.GoogleAuthProvider());

 //Auth logic to run auth providers
// AuthLogin(provider) {
//  return this.afAuth.auth.signInWithPopup(provider)
// .then((result) => {
// console.log('You have been successfully logged in!')
// }).catch((error) => {
  // console.log(error)
//  })
//  }
  
// }
