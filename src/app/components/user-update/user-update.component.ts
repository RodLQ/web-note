import { Component, OnInit } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/api/user.service';
import { NotifyService } from 'src/app/services/extra/notify.service';
import { WebSocketService } from 'src/app/services/web-socket.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})
export class UserUpdateComponent implements OnInit {
 
  message:any = {};
  hide = true;
  user:User = {
    nickname:'',
    name:'',
    dni:'',
    mail:''
  };

  constructor
  (
    private notifyService: NotifyService,
    private userService:UserService,
    private _bottomSheet: MatBottomSheet,
    private webSocketService:WebSocketService
  ) 
  {
    this.notifyService.getDataUpdateUser$().subscribe(
      res=>{
        this.user = res;
      }
    );
  }

  ngOnInit(): void {
  }

  updateUser(){
    delete this.user.password;
    delete this.user.date;
    delete this.user.img_url;
    
    this.userService.updateUser(this.user).subscribe(
      res => {
        this.message = res;
        
        this.notifyService.openNotify(this.message.message);
        this._bottomSheet.dismiss();
      }
    );
  }
}
