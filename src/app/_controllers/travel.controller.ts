import { Injectable, OnInit } from "@angular/core";
import { MessageService } from "../_services/messages/message.service";
import { Router } from "@angular/router";
import { Urls } from "../_common/routes";
import { TravelService } from "../_services/travel/travel.service";
import { Observable, forkJoin, Subject } from "rxjs";
import { Travel } from "../_models/_entity-models/travel";
import { TravelType } from "../_common/enumeradores.enum";


@Injectable()
export class TravelController implements OnInit{
 
    public travels : Travel[];
    
    public starredSubject : Subject<Travel[]> = new Subject<Travel[]>();
    public groupSubject : Subject<Travel[]> = new Subject<Travel[]>();
    public groupFlySubject : Subject<Travel[]> = new Subject<Travel[]>();
    public aloneSubject : Subject<Travel[]> = new Subject<Travel[]>();

    constructor(
        public messageService : MessageService,
        public router : Router,
        public travelService : TravelService
    ) { 
        this.travels = [];
        this.loadTravels();
    }

    ngOnInit(): void {
        this.loadTravels();
    }

    public loadTravels(){        
        this.loadResources().subscribe(
            result => {
                this.travels = result[0]['hydra:member'];                
                this.starredSubject.next(this.loadStarredTravels());
                this.groupFlySubject.next(this.loadGroupFlyTravels());
                this.groupSubject.next(this.loadGroupTravels());
                this.aloneSubject.next(this.loadAloneTravels());
            }
        )
    }

    public loadResources() : Observable<any>{
        return forkJoin(
            this.travelService.GetList()
        );
    }

    public loadStarredTravels() : Travel[]{
        let result = this.travels.filter(e => e.starredTravel);
        
        return result;
    }

    public loadGroupTravels() : Travel[]{
        let result = this.travels.filter(e => e.category == TravelType.GruopOut);
        return result;
    }

    public loadGroupFlyTravels() : Travel[]{
        let result = this.travels.filter(e => e.category == TravelType.GroupFlyOut);
        return result;
    }

    public loadAloneTravels() : Travel[]{
        let result = this.travels.filter(e => e.category == TravelType.AloneOut);
        return result;
    }

    public getTravelById(id : string){
        return this.travelService.GetEntityById(id);
    }
}
