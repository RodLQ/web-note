import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Note } from 'src/app/models/note';
import { GlobalConstService } from '../extra/global-const.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  API_URI = GlobalConstService.API_URI;

  constructor( private http:HttpClient ) { }

  getListNotes(){
    return this.http.get( `${this.API_URI}/list/note`);
  }
  deleteNotes(id:String){
    return this.http.delete( `${this.API_URI}/delete/note/${id}`);
  }
  saveNotes( note:Note ){
    return this.http.post( `${this.API_URI}/registration/note` , note );
  }
  getOneNote(cod:string ){
    return this.http.get( `${this.API_URI}/get/note/${cod}`);
  }

  updateNotes( note:Note ){
    return this.http.put( `${this.API_URI}/update/note/${note.cod_note}`, note );
  }
  getListNotesRank( min:number, max:number ){
    return this.http.get( `${this.API_URI}/list/note/rank/${min}&${max}`);
  }
  
}
