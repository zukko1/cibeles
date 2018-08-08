import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Urls } from "../_common/routes";
import { Schedule } from "../_models/_entity-models/schedule";
import { ScheduleService } from "../_services/schedule/schedule.service";
import { DayService } from "../_services/day/day.service";
import { Subject } from "rxjs";
import { MediaObjectService } from "../_services/media-object/media-object.service";
import { MediaObject } from "../_models/_entity-models/media-object";
import { URL_MEDIA_BASE } from "../_common/constants";

@Injectable()
export class MediaObjectController{
    constructor(
        public router : Router,
        public mediaObjectService : MediaObjectService
    ) { 
    }
    
    GetMediaObjectById(idSchedule : string, subject : Subject<MediaObject>){
        this.mediaObjectService.GetEntityByIdStanard<MediaObject>(idSchedule).subscribe(
            result =>{
                let response : MediaObject = result;
                subject.next(response);
            }
        )
    }

    GetMediaObjectUrlByName(name : string){
        return URL_MEDIA_BASE + name;
    }
}