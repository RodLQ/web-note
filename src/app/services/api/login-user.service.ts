import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginUserService {
  //URI = URL and URN
  API_URI = 'https://back-note-api.herokuapp.com/api';

  constructor( private http:HttpClient ) { }
  
  getValidationLogin(user:User){
    return this.http.post(`${this.API_URI}/login`, user);
  }
}
