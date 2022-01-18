import { Component, OnInit } from '@angular/core';
import {MatBottomSheetRef} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-note-reg-b-sheet',
  templateUrl: './note-reg-b-sheet.component.html',
  styleUrls: ['./note-reg-b-sheet.component.scss']
})
export class NoteRegBSheetComponent implements OnInit {

  constructor(
    private _bottomSheetRef: MatBottomSheetRef<NoteRegBSheetComponent>
  ) { }

  ngOnInit(): void {
  }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

}
