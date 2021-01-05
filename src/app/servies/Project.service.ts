import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  
  })

  export class ProjectService {
    url:string= "http://localhost:62422//api/ Project/"
    
      constructor(private http:HttpClient ){
        
        
      }
        
    
      
    }
    