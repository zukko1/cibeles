import { Injectable } from '@angular/core';
import { ServiceBase } from '../base.service';
import { Schedule } from '../../_models/_entity-models/schedule';
import { MessageService } from '../messages/message.service';
import { HttpClient } from '@angular/common/http';
import { EntityURI } from '../../_common/enumeradores.enum';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService extends ServiceBase<Schedule>{

  constructor(
    httpClient : HttpClient,
    messageService : MessageService
  ) { 
    super(httpClient, messageService);
  }

  getModel(){
    return EntityURI.SCHEDULES;
  }
}
