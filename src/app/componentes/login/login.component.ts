import { Component, OnInit } from '@angular/core';
import { LoginDto } from '../../_models/dto/login-dto';
import { UserController } from '../../_controllers/user.controller';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public credentials : LoginDto;

  constructor(
    public userController : UserController
  ) { }

  ngOnInit() {
    this.credentials = new LoginDto();
  }

  login(){
    this.userController.login(this.credentials);
  }

}
