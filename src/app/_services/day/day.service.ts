import { Injectable } from '@angular/core';
import { ServiceBase } from '../base.service';
import { Day } from '../../_models/_entity-models/day';
import { MessageService } from '../messages/message.service';
import { HttpClient } from '@angular/common/http';
import { EntityURI } from '../../_common/enumeradores.enum';

@Injectable({
  providedIn: 'root'
})
export class DayService extends ServiceBase<Day>{

  constructor(
    httpClient : HttpClient,
    messageService : MessageService
  ) { 
    super(httpClient, messageService);
  }

  getModel(){
    return EntityURI.DAYS;
  }
}
