import { Injectable } from '@angular/core';
import { EntityURI } from '../../_common/enumeradores.enum';
import { HttpClient } from '@angular/common/http';
import { MessageService } from '../messages/message.service';
import { ServiceBase } from '../base.service';
import { MediaObject } from '../../_models/_entity-models/media-object';

@Injectable({
  providedIn: 'root'
})
export class MediaObjectService extends ServiceBase<MediaObject>{

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
