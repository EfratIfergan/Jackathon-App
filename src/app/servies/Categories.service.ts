import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  
  })

  export class CategoriesService {
    url:string="http://localhost:62422//api/ Categories/"
    
      constructor(private http:HttpClient ){
        
        
      }
        
    
      
    }
    