import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/api/user.service';
import { NotifyService } from 'src/app/services/extra/notify.service';
import { UserUpdateBSheetComponent } from '../user-update-b-sheet/user-update-b-sheet.component';
import { UserUpdateComponent } from '../user-update/user-update.component';

@Component({
  selector: 'app-dashboard-nav',
  templateUrl: './dashboard-nav.component.html',
  styleUrls: ['./dashboard-nav.component.scss']
})
export class DashboardNavComponent implements OnInit {

  result:any = [];
  user:User = {};

  constructor
  (
    private router: Router,
    private userService:UserService,
    private _bottomSheet: MatBottomSheet,
    private notifyService: NotifyService
  ) 
  {
    this.getUserWithToken();
  }

  ngOnInit(): void {
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/']);
  }
  
  getUserWithToken(){
    this.userService.getUserWithToken().subscribe(
      res =>{
        this.result = res;
        this.result = this.result.result;

        this.user = this.result[0];

        //this.notifyService.sendUpdateUser(this.result[0]);
        
      }
    );
  }

  //!Show buttom
  openBottomSheet(): void {
    this._bottomSheet.open(UserUpdateBSheetComponent);
    this.notifyService.sendUpdateUser(this.result[0]);
  }

}
