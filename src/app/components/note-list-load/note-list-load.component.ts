import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/api/note.service';
import { NotifyService } from 'src/app/services/extra/notify.service';

@Component({
  selector: 'app-note-list-load',
  templateUrl: './note-list-load.component.html',
  styleUrls: ['./note-list-load.component.scss']
})
export class NoteListLoadComponent implements OnInit {

  notesLoad:any = [];
  notes:any = [];
  
  min = 0; max = 3;

  constructor(
    private noteService:NoteService,
    private notifyService:NotifyService
  ) 
  {
    
  }

  ngOnInit(): void {
    this.showListNotes( 0 , 3 );
  }

  showListNotes( x:number,y:number ){
    if(localStorage.getItem('token')){

      this.noteService.getListNotesRank(x,y).subscribe(
        res=>{
          this.notesLoad = res;
          this.notesLoad = this.notesLoad.result;

          console.log('NotesLoad: ', this.notesLoad);

          let lengthNotes = this.notesLoad.length;

          for (let i = 0; i < lengthNotes ; i++) {
            this.notes.push(this.notesLoad[i]);    
          }
          
          console.log('Notes: ',this.notes);
        }
      );

    }
  }

  addArrayNote(){
    console.log(this.notesLoad.length);
    if(this.notesLoad.length != 0){
      this.min = this.min + this.max ;
    }

    console.log(this.min,this.max);

    this.showListNotes(this.min,this.max);
    //min max

    //! min: inicio 
    //! max: cantidad de elementos
  
  }
  
  onScrollDown(){
    this.addArrayNote();
  }

}
