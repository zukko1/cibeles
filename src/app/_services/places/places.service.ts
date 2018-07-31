import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from '../messages/message.service';
import { EntityURI } from '../../_common/enumeradores.enum';
import { ServiceBase } from '../base.service';
import { Place } from '../../_models/_entity-models/place';

@Injectable({
  providedIn: 'root'
})
export class PlacesService extends ServiceBase<Place>{

  constructor(
    public httpClient : HttpClient,
    public messageService : MessageService
  ) {
    super(httpClient, messageService);
   }

   getModel(){
     return EntityURI.PLACES;
   }
}
