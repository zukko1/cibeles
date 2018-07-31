
import { User } from "../_models/user";
import { Observable ,  of } from "rxjs";
import { Router } from "@angular/router";
import { isNullOrUndefined } from "util";
import { Injectable } from "@angular/core";
import { UsersService } from "../_services/users/users.service";
import { MessageService } from "../_services/messages/message.service";
import { Urls } from "../_common/routes";
import { MessageType } from "../_common/enumeradores.enum";
import { CacheHelper } from "../_helpers/cacheHelper";
import { LoginDto } from "../_models/dto/login-dto";
@Injectable()
export class UserController{

    constructor(
        public userService : UsersService,
        public messageService : MessageService,
        public router : Router){
        }

    public login(credentials : LoginDto){
        this.userService.login(credentials).subscribe(
            token=>{
                if(token){
                    CacheHelper.SetToken(token);
                    this.router.navigateByUrl(Urls.INDEX);
                    this.messageService.success('Login correcto', true);
                }
            },
            error =>{
                this.messageService.error("Ah ocurrido un error en el inicio de sesión. Inténtelo de nuevo más tarde.");
            },
            () => {
                this.messageService.error("Ah ocurrido un error en el inicio de sesión. Inténtelo de nuevo más tarde.");
            }
        )
    } 
}