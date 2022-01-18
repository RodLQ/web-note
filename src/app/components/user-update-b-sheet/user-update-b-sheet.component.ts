import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-update-b-sheet',
  templateUrl: './user-update-b-sheet.component.html',
  styleUrls: ['./user-update-b-sheet.component.scss']
})
export class UserUpdateBSheetComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }

}
