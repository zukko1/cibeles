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
    }

    ngOnInit(): void {
    }

    public loadTravels(){        
        console.log("init Travel");        
        this.loadResources().subscribe(
            result => {
                console.log("subscribe Travel");       
                this.travels = result[0]['hydra:member'];
                console.log(result);       

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
        return this.travels.filter(e => e.starredTravel);
    }

    public loadGroupTravels() : Travel[]{
        return this.travels.filter(e => e.category = TravelType.GruopOut);
    }

    public loadGroupFlyTravels() : Travel[]{
        return this.travels.filter(e => e.category = TravelType.GroupFlyOut);
    }

    public loadAloneTravels() : Travel[]{
        return this.travels.filter(e => e.category = TravelType.AloneOut);
    }
}