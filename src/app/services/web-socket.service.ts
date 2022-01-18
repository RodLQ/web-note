import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import  io  from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  socket:any;

  constructor() {
    this.socket = io('https://back-note-api.herokuapp.com');
  }

  listenToTheServer(NombreDelEvento: string){
    return new Observable( (subscriber)=>{
      this.socket.on( NombreDelEvento, (datoRecibido:any)=>{
        subscriber.next(datoRecibido);
      } )
    } 
    );
  }

  sendToServer(NombreDelEvento: string, datos:any){
    this.socket.emit(NombreDelEvento,datos);
  }

  

}
