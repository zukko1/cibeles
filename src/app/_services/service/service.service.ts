import { Injectable } from '@angular/core';
import { ServiceBase } from '../base.service';
import { Service } from '../../_models/_entity-models/service';
import { MessageService } from '../messages/message.service';
import { HttpClient } from '@angular/common/http';
import { EntityURI } from '../../_common/enumeradores.enum';

@Injectable({
  providedIn: 'root'
})
export class ServiceService extends ServiceBase<Service>{

  constructor(
    httpClient : HttpClient,
    messageService : MessageService
  ) {
    super(httpClient, messageService);
   }

   getModel(){
     return EntityURI.SERVICES;
   }
}
