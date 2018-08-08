import { Injectable, OnInit } from "@angular/core";
import { MessageService } from "../_services/messages/message.service";
import { Router } from "@angular/router";
import { Urls } from "../_common/routes";
import { TravelService } from "../_services/travel/travel.service";
import { Observable, forkJoin, Subject } from "rxjs";
import { Travel } from "../_models/_entity-models/travel";
import { TravelType } from "../_common/enumeradores.enum";
import { TavelDate } from "../_models/_entity-models/travelDate";
import { TravelDateService } from "../_services/travel-date/travel-date.service";
import { Plan } from "../_models/_entity-models/plan";
import { PlansService } from "../_services/plans/plans.service";
import { HotelService } from "../_services/hotels/hotel.service";
import { Hotel } from "../_models/_entity-models/hotel";


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
        public travelService : TravelService,
        public travelDatesService : TravelDateService,
        public planService : PlansService,
        public hotelService : HotelService
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

    public getDates(dates : TavelDate[]){
        this.travelDatesService.GetList().subscribe(
            datesResult =>{
                dates = datesResult["hydra:member"];
                console.log(dates);
                
            }
        )
    }

    public getPlanes(planes : Plan[]){
        this.planService.GetList().subscribe(
            planesResult =>{
                planes = planesResult["hydra:member"];
                console.log(planes);
            }
        )
    }

    public getHotels(hotels : Hotel[]){
        this.hotelService.GetList().subscribe(
            hotelsResult =>{
                hotels = hotelsResult["hydra:member"];
                console.log(hotels);
            }
        )
    }
}
