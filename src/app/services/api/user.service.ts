import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  API_URI = 'https://back-note-api.herokuapp.com/api';

  constructor( private http:HttpClient ) { }

  saveUser(user:User){
    return this.http.post(`${this.API_URI}/registration/user`, user);
  }
  getUserWithToken(){
    return this.http.get(`${this.API_URI}/get/userToken`);
  }
  updateUser( user:User ){
    return this.http.put( `${this.API_URI}/update/user`, user );
  }

}
