import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Note } from 'src/app/models/note';
import { NoteService } from 'src/app/services/api/note.service';
import { NotifyService } from 'src/app/services/extra/notify.service';
import { WebSocketService } from 'src/app/services/web-socket.service';

@Component({
  selector: 'app-note-registration',
  templateUrl: './note-registration.component.html',
  styleUrls: ['./note-registration.component.scss']
})
export class NoteRegistrationComponent implements OnInit {
  
  hide = true;
  message:any = {};

  note:Note = {
    cod_user: 0,
    title: '',
    description: '',
    img_url: ''
  };
  //Editar
  edit:boolean = false;

  constructor( private noteService:NoteService,
    private webSocketService:WebSocketService,
    private notifyService:NotifyService,
    private _bottomSheet: MatBottomSheet) 
  {
    this.getDataNoteService();
  }

  ngOnInit(): void {
  }

  saveNote(){
    this.noteService.saveNotes( this.note ).subscribe(
      res => {
        console.log(res);
        this.webSocketService.sendToServer('modified-note', true );
        
        this.message = res;
        this.note = {};
        this.notifyService.openNotify( this.message.message );

        this._bottomSheet.dismiss();
      }
    );
  }

  getDataNoteService(){
    this.notifyService.getDataUpdateNote$().subscribe(
      res => {
        this.note = res;
        this.edit = true;
      }
    );
  }

  updateNote(){
    //si se envia la fecha crea un error en el backend
    delete this.note.date;
    this.noteService.updateNotes(this.note).subscribe(
      res => {
        this.message = res;
        this.notifyService.openNotify( this.message.message );
      }
    );

    this.note = {};
    this.edit = false;
    
    this._bottomSheet.dismiss();
  }

  clear(){
    this.note = {};
    this.edit = false;
  }

}
