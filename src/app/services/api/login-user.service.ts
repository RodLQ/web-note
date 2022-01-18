import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { GlobalConstService } from '../extra/global-const.service';

@Injectable({
  providedIn: 'root'
})
export class LoginUserService {
  //URI = URL and URN
  API_URI = GlobalConstService.API_URI;

  constructor( private http:HttpClient ) { }
  
  getValidationLogin(user:User){
    return this.http.post(`${this.API_URI}/login`, user);
  }
}
