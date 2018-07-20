import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/user';
import { UserController } from '../../_controllers/user.controller';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public user = {'username' : '', 'password' :''};
  constructor(public userController : UserController) {
    
  }

  ngOnInit() {

  }

  login(){
    this.userController.login(this.user.username, this.user.password);
  }

}
