import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/api/user.service';
import { NotifyService } from 'src/app/services/extra/notify.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  //hide Password
  hide = true;
  //object user
  user:User = {
    nickname:'',
    password:'',
    name: '',
    position: '',
    dni:'',
    mail:''
  }
  
  constructor( private userService:UserService,
    private notifyService:NotifyService ) { }

  ngOnInit(): void {
  }

  saveUser(){
      //console.log(this.user);
      this.userService.saveUser(this.user).subscribe(
        (responseAPI)=>{
          console.log(responseAPI);
          this.notifyService.openNotify('User Registration');
        }
      );
  }

}
