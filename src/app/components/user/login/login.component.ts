import { Component, OnInit } from '@angular/core';
import {IUser} from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})



export class LoginComponent implements OnInit {


  public user: IUser = {
    email: 's@s',
    password: '1'
  };

  constructor() {}

  login() {
    console.log(this.user);
  }

  ngOnInit() {
    console.log('init login');
  }

}
