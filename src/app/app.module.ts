/**
 * Angular imports
 */
import {BrowserModule} from '@angular/platform-browser';
import {NgModule, Injectable} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule, RouterLink, Router} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpModule} from '@angular/http';
import {Http, Response, Headers} from "@angular/http";
import {map} from 'rxjs/operators';
import {Observable} from "rxjs";
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthGuard} from './_guards';

/**
 * Material imports
 */
import {
  MatToolbarModule,
  MatDialogModule,
  MatListModule,
  MatButtonModule,
  MatSidenavModule,
  MatCardModule,
  MatMenuModule,
  MatFormFieldModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatCheckboxModule,
  MatGridListModule,
  MatInputModule,
  MatIconModule,
  MatPaginatorModule,
  MatSortModule,
  MatTableModule,
  MatDatepickerModule,
  MatNativeDateModule
} from '@angular/material';

/**
 * Components
 */
import {AppComponent} from './app.component';
import {UsersComponent} from './componentes/users/users.component';
import {MessagesComponent} from './componentes/messages/messages.component';
import {InternalLayoutComponent} from './componentes/internal-layout/internal-layout.component';
import {DetalleVueloComponent} from './componentes/detalle-vuelo/detalle-vuelo.component';


/**
 Services
 */

import {UsersService} from './_services/users/users.service';
import {SearchBarService} from './_services/search-bar/search-bar.service';
import {MessageService} from './_services/messages/message.service';
import {PlansService} from './_services/plans/plans.service';
import {TravelService} from './_services/travel/travel.service';
import {PlacesService} from './_services/places/places.service';
import {TravelRoutesService} from './_services/travel-routes/travel-routes.service';
import {TravelDateService} from './_services/travel-date/travel-date.service';
/**
 * Controllers
 */

import {UserController} from './_controllers/user.controller';
import {SearchBarController} from './_controllers/search-bar.controller';
import {TravelController} from './_controllers/travel.controller';

/**
 * Configuration imports
 */
import {RoutingModule} from '../modules/routing.modules';
import {JwtInterceptor} from './_interceptors/jwt.interceptor';
import {ErrorInterceptor} from './_interceptors/error.interceptor';
import {Ter4BtnPrincipalDirective} from './directives/ter4-btn-principal/ter4-btn-principal.directive';
import {IndexComponent} from './componentes/index/index.component';
import {SearchResultComponent} from './componentes/search-result/search-result.component';
import {SearchResultItemComponent} from './componentes/search-result-item/search-result-item.component';
import {ContactUsComponent} from './componentes/contact-us/contact-us.component';
import {SearchBarInternalComponent} from './componentes/search-bar-internal/search-bar-internal.component';
import {LayoutMenuComponent} from './componentes/layout-menu/layout-menu.component';
import {SearchBarIndexComponent} from './componentes/search-bar-index/search-bar-index.component';
import {RoomsSelectorComponent} from './controls/rooms-selector/rooms-selector.component';
import {PlanesComponent} from './componentes/planes/planes.component';
import {LoginComponent} from './componentes/login/login.component';
import {AboutComponent} from './componentes/about/about.component';
import {TravelDatesPickerComponent} from './controls/travel-dates-picker/travel-dates-picker.component';
import {HomeComponent} from './componentes-admin/home/home.component';
import { PlanComponent } from './componentes-admin/plan/plan.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    MessagesComponent,
    Ter4BtnPrincipalDirective,
    IndexComponent,
    InternalLayoutComponent,
    DetalleVueloComponent,
    SearchResultComponent,
    SearchResultItemComponent,
    ContactUsComponent,
    SearchBarInternalComponent,
    LayoutMenuComponent,
    SearchBarIndexComponent,
    RoomsSelectorComponent,
    PlanesComponent,
    LoginComponent,
    AboutComponent,
    TravelDatesPickerComponent,
    HomeComponent,
    PlanComponent
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
    MatSnackBarModule,
    RouterModule,
    MatListModule,
    MatButtonModule,
    MatSidenavModule,
    MatMenuModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatGridListModule,
    MatInputModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatTableModule
  ],
  providers: [
    UsersService,
    AuthGuard,
    UserController,
    MessageService,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    SearchBarService,
    SearchBarController,
    PlansService,
    TravelService,
    PlacesService,
    TravelRoutesService,
    TravelDateService,
    TravelController
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
