import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { NoteService } from 'src/app/services/api/note.service';
import { NotifyService } from 'src/app/services/extra/notify.service';
import { WebSocketService } from 'src/app/services/web-socket.service';
import { NoteRegBSheetComponent } from '../note-reg-b-sheet/note-reg-b-sheet.component';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit {

  notes:any = [];
  message:any = {};
  result:any = [];

  constructor( private noteService:NoteService,
    private webSocketService: WebSocketService,
    public notifyService:NotifyService,
    private _bottomSheet: MatBottomSheet)
    {
      this.evaluar('event-room');
    }

  ngOnInit(): void {
    this.showListNotes();
  }
  showListNotes(){
    if(localStorage.getItem('token')){
      this.noteService.getListNotes().subscribe(
        res => {
          this.notes = res;
          this.notes = this.notes.result;          
        }
      );
    }
    else{
      console.log('no hay token');
    }
  }
  deleteNote(cod_note:string){
    this.noteService.deleteNotes(cod_note).subscribe(
      res => {
        this.message = res;
        this.notifyService.openNotify( this.message.message );
      }
    );
  }
  evaluar(nombre:any){
    this.webSocketService.listenToTheServer(nombre).subscribe( 
      (dato)=>{
        if(dato=true){
          this.showListNotes();
        }
    } );
  }
  //?send data to other component
  updateNote( cod_note:string){
    this.openBottomSheet();
    this.noteService.getOneNote(cod_note).subscribe(
      res => {
        this.result = res;
        this.result = this.result.result;
        //console.log( this.result[0] );
        this.notifyService.sendUpdateNote(this.result[0]);
      }
    );
  }
  //!Show buttom
  openBottomSheet(): void {
    this._bottomSheet.open(NoteRegBSheetComponent);
  }
}
