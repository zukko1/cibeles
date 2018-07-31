import { Injectable } from '@angular/core';
import { ServiceBase } from '../base.service';
import { Travel } from '../../_models/_entity-models/travel';
import { MessageService } from '../messages/message.service';
import { HttpClient } from '@angular/common/http';
import { EntityURI } from '../../_common/enumeradores.enum';

@Injectable()
export class TravelService extends ServiceBase<Travel>{

  getModel():string{
    return EntityURI.TRAVEL;
  }

  constructor(
    httpClient : HttpClient,
    messageService : MessageService
  ) { 
    super(httpClient, messageService)
  }
}
