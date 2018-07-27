
import { User } from "../_models/user";
import { Observable ,  of } from "rxjs";
import { Router } from "@angular/router";
import { isNullOrUndefined } from "util";
import { Injectable } from "@angular/core";
import { UsersService } from "../_services/users/users.service";
import { MessageService } from "../_services/messages/message.service";
import { Urls } from "../_common/routes";
import { MessageType } from "../_common/enumeradores.enum";
@Injectable()
export class UserController{

    constructor(
        public userService : UsersService,
        public messageService : MessageService,
        public router : Router){
        }

    public login(user : string, pass: string){
        this.userService.login(user, pass).subscribe(
            token =>{
                this.router.navigateByUrl(Urls.INDEX);
                this.messageService.success('Login correcto', true);
            }
        )
    } 
}