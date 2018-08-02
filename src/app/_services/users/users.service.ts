import {Injectable} from '@angular/core';
import {ServiceBase} from '../base.service';
import {User} from '../../_models/user';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MessageService} from '../messages/message.service';
import {Observable, of} from 'rxjs';
import {IUser} from './iuser.service';
import {EntityURI} from '../../_common/enumeradores.enum';
import {LoginDto} from '../../_models/dto/login-dto';

@Injectable()
export class UsersService extends ServiceBase<User> implements IUser {

  public getModel(): string {
    return EntityURI.USER;
  }

  constructor(public httpClient: HttpClient, messageService: MessageService) {
    super(httpClient, messageService);
  }

  /**
   * @method  login Método que a partir de un usuario y una contraseña retorna el token para el consumo de servicios en el sistema
   * @returns user Entidad Usuario que contiene la información solicitada
   * @example {
                  'token' : 'ilusdghklsdyotu34op534ot6iw54unotw3j4tgh54uiw3'
                }
   */
  public login(credentials: LoginDto): Observable<string> {
    let result: string;
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    const params = '{"username" : "' + credentials.username + '", "password" : "' + credentials.password + '"}';
    return this.http.post<string>(
      this.PathBase + 'login_check',
      params,
      {headers: headers});
  }

  public logout() {

  }
}
