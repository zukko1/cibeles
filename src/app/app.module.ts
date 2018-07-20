/**
 * Angular imports
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { Http, Response, Headers} from "@angular/http";
//import "rxjs/add/operator/map";
import { map } from 'rxjs/operators';
import { Observable } from "rxjs";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

/**
 * Material imports
 */
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

/**
 * Components
 */
import { AppComponent } from './app.component';
import { UsersComponent } from './componentes/users/users.component';
import { MessagesComponent } from './componentes/messages/messages.component';

/**
  Services
*/

import { UsersService } from './_services/users/users.service';

/**
 * Controllers
 */

import { UserController } from './_controllers/user.controller';

/**
 * Configuration imports
 */
import { RoutingModule } from '../modules/routing.modules';
import { MessageService } from './_services/messages/message.service';
import { JwtInterceptor } from './_interceptors/jwt.interceptor';
import { ErrorInterceptor } from './_interceptors/error.interceptor';
import { Ter4BtnPrincipalDirective } from './directives/ter4-btn-principal/ter4-btn-principal.directive';
import { MatSnackBarModule } from '@angular/material';
import { IndexComponent } from './componentes/index/index.component';
import { InternalLayoutComponent } from './componentes/internal-layout/internal-layout.component';
import { DetalleVueloComponent } from './componentes/detalle-vuelo/detalle-vuelo.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    MessagesComponent,
    Ter4BtnPrincipalDirective,
    IndexComponent,
    InternalLayoutComponent,
    DetalleVueloComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatSnackBarModule
  ],
  providers: [
    UsersService, 
    UserController, 
    MessageService,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
