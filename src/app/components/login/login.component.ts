import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { LoginUserService } from 'src/app/services/api/login-user.service';
import { Router } from '@angular/router';
import { NotifyService } from 'src/app/services/extra/notify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  //hide Password
  hide = true;
  //object user
  user:User = {
    nickname:'',
    password:'',
    name:'',
    position:'',
    dni:'',
    mail:''
  }
  answerToken:any = {};

  constructor
    ( 
      private loginUserService:LoginUserService,
      private notifyService: NotifyService,
      private router: Router
    ) 
  {
    
  }

  ngOnInit(): void {

  }

  validar(){
    
    this.loginUserService.getValidationLogin(this.user).subscribe(      
      res => {
        this.answerToken = res;
        if( this.answerToken.token ){
          
          this.notifyService.openNotify("Welcome");

          localStorage.setItem('token',this.answerToken.token);
          //console.log( localStorage.getItem('token') );
          this.router.navigate(['/dashboard']);
        }
        else{
          this.notifyService.openNotify(this.answerToken.message);
          
        }
      }
    );
  }

  

}
