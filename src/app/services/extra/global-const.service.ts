import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalConstService {

  //https://back-note-api.herokuapp.com
  public static  URI = "https://back-note-api.herokuapp.com";
  
  //https://back-note-api.herokuapp.com/api
  public static  API_URI = GlobalConstService.URI+"/api";

  constructor() { }
}
