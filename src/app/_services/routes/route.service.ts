import { Injectable } from '@angular/core';
import { ServiceBase } from '../base.service';
import { EntityURI } from '../../_common/enumeradores.enum';
import { TravelRoute } from '../../_models/_entity-models/travel-routes';
import { HttpClient } from '@angular/common/http';
import { MessageService } from '../messages/message.service';

@Injectable({
  providedIn: 'root'
})
export class RouteService extends ServiceBase<TravelRoute> {

  constructor(
    public httpClient : HttpClient,
    messageService : MessageService
  ) { 
    super(httpClient, messageService);
  }

  getModel(){
    return EntityURI.TRAVEL_ROUTES;
  }
}
