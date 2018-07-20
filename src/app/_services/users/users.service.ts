import { Injectable } from '@angular/core';
import { ServiceBase } from '../base.service';
import { User } from '../../_models/user';
import { HttpClient } from '@angular/common/http';
import { MessageService } from '../messages/message.service';
import { Observable ,  of } from 'rxjs';
import { IUser } from './iuser.service';

@Injectable()
export class UsersService extends ServiceBase<User> implements IUser{

  public getModel(): string {
    return "api/users";
  }
  constructor(httpClient : HttpClient, messageService : MessageService) { 
    super(httpClient, messageService);
  }

  /**
     * @method  login Método que a partir de un usuario y una contraseña retorna la entidad Usuario que se loguea en el sisema
     * @returns user Entidad Usuario que contiene la información solicitada
     * @example {
                  'username' : 'usuario123',
                  'salt' : null,
                  'password' : '123',
                  'roles' : ['ROLE_ADMIN'],
                  'isActive' : true,
                  'groups' : ['ADMIN'],
                  'deleteAt' : null,
                  '@context' : 'Something',
                  '@id' : 'api/users/1',
                  '@type' : 'user'      
                }
     */
  public login(user, pass):Observable<User>{
    return of({
      'username' : 'string',
      'salt' : 'string',
      'password' : 'string',
      'roles' : ['string'],
      'isActive' : true,
      'groups' : ['string'],
      'deleteAt' : new Date(),
      '@context' : 'string',
      '@id' : 'string',
      '@type' : 'string'      
      }
    );
  }

  public logout(){
    
  }
}
