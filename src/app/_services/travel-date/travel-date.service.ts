import { Injectable } from '@angular/core';
import { MessageService } from '../messages/message.service';
import { HttpClient } from '@angular/common/http';
import { TavelDate } from '../../_models/_entity-models/travelDate';
import { ServiceBase } from '../base.service';
import { EntityURI } from '../../_common/enumeradores.enum';

@Injectable({
  providedIn: 'root'
})
export class TravelDateService extends ServiceBase<TavelDate>{

  constructor(
    public httpClient : HttpClient,
    public messageService : MessageService
  ) { 
    super(httpClient, messageService);
  }

  getModel(){
    return EntityURI.TRAVEL_DATES;
  }
}
