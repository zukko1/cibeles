import {Injectable} from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';

import {UsersService} from '../_services/users/users.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private authenticationService: UsersService) {
  }
  
  intercept(request: HttpRequest<any>, next: HttpHandler) :Observable<HttpEvent<any>> {
    return next.handle(request);
    /**
     * return next.handle(request).pipe(catchError(err => {
      if (err.status === 401) {
        this.authenticationService.logout();
      }
      const error = err.error.message || err.statusText;
      return throwError(error);
    }));
     */
  }
}
