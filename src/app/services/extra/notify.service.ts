import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, Subject } from 'rxjs';
import { Note } from 'src/app/models/note';
import { User } from 'src/app/models/user';
import { format, register } from 'timeago.js';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  localeFunc:any = (number: number, index: number, totalSec: number) =>{
    return [
      ['En este momento ', 'Ahora'],
      ['Hace %s segundos', '%s segundos atras'],
      ['Hace 1 minuto', '1 minuto atras'],
      ['Hace %s minutos'],
      ['Hace 1 hora', '1 hora atras'],
      ['Hace %s horas', '%s horas atras'],
      ['Hace 1 dia', '1 dia atras'],
      ['Hace %s dias', '%s dias atras'],
      ['Hace 1 semana', '1 Semana atras'],
      ['Hace %s semanas', '%s semanas atras'],
      ['Hace 1 mes', '1 mes atras'],
      ['Hace %s meses', '%s meses atras'],
      ['in 1 year', '1 year ago'],
      ['in %s years', '%s years ago']
    ][index];
  }
  //?Note
  private noteUpdate:Note = {  };
  private noteUpdate$:Subject<Note>;
  //?User
  private userUpdate:User = { };
  private userUpdate$:Subject<User>;


  constructor( private notifyBelow: MatSnackBar ) {
    register('es_ES', this.localeFunc );

    this.noteUpdate$ = new Subject();
    this.userUpdate$ = new Subject();
  }

  openNotify(message:string) {

    this.notifyBelow.open(message, 'X',
    {
      horizontalPosition: 'end',
      verticalPosition: 'top',

      panelClass: ['color-snackbar'],

      duration: 2000
    }
    );
  }

  convertirFecha(fecha:string){
    return format(fecha, 'es_ES');
  }

  //!Enviar data entre componentes
  //?Note
  //modificar
  sendUpdateNote(note:Note){
    this.noteUpdate = note;
    this.noteUpdate$.next(this.noteUpdate);
  }
  //para subscribirse
  getDataUpdateNote$(): Observable <Note> {
    return this.noteUpdate$.asObservable();
  }
  //? User
  sendUpdateUser(user:User){
    this.userUpdate = user;
    this.userUpdate$.next(this.userUpdate);
  }
  
  getDataUpdateUser$(): Observable<User> {
    return this.userUpdate$.asObservable();
  }
  

}
