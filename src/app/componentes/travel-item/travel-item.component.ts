import { Component, OnInit, Input } from '@angular/core';
import { Travel } from '../../_models/_entity-models/travel';
import { Utils } from '../../_common/util';
import { Urls } from '../../_common/routes';
import { Router } from '@angular/router';
import { MediaObjectController } from '../../_controllers/media-object.controller';

@Component({
  selector: 'travel-item',
  templateUrl: './travel-item.component.html',
  styleUrls: ['./travel-item.component.css']
})
export class TravelItemComponent implements OnInit {

  @Input() travel : Travel;
  constructor(
    public router : Router,
    public mediaObjectController : MediaObjectController
  ) { }

  ngOnInit() {
  }
  
  getDays(startDate : string, finishDate : string){
    return Utils.getDays(finishDate, startDate);
  }

  seeMore(id : string){
    this.router.navigateByUrl(Urls.DETALLE_VUELO + '/' + id);
  }

  public printImage(name : string){
    return this.mediaObjectController.GetMediaObjectUrlByName(name);
  }
}
