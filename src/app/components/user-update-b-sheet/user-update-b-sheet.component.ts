import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-update-b-sheet',
  templateUrl: './user-update-b-sheet.component.html',
  styleUrls: ['./user-update-b-sheet.component.scss']
})
export class UserUpdateBSheetComponent implements OnInit {

  constructor
  (
    private _bottomSheetRef: MatBottomSheetRef<UserUpdateBSheetComponent>
  ) 
  { 
    
  }

  ngOnInit(): void {
  }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

}
