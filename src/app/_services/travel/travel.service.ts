import { Injectable } from '@angular/core';
import { ServiceBase } from '../base.service';
import { Travel } from '../../_models/_entity-models/travel';
import { MessageService } from '../messages/message.service';
import { HttpClient } from '@angular/common/http';
import { EntityURI } from '../../_common/enumeradores.enum';
import { SearchBarFilters } from '../../_models/search-bar/searchBarFilters';
import { Observable } from 'rxjs';
import { ResponseList } from '../../_models/response-list';

@Injectable()
export class TravelService extends ServiceBase<Travel>{

  getModel():string{
    return EntityURI.TRAVEL;
  }

  constructor(
    public httpClient : HttpClient,
    messageService : MessageService
  ) { 
    super(httpClient, messageService)
  }

  public search(filters : string) : Observable<ResponseList<Travel>>{
    return this.httpClient.get<ResponseList<Travel>>(this.PathBase + this.getModel() + filters, {});
  }
}
