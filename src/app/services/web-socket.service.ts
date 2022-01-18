import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import  io  from 'socket.io-client';
import { GlobalConstService } from './extra/global-const.service';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  socket:any;

  constructor() {
    this.socket = io( GlobalConstService.URI );
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
