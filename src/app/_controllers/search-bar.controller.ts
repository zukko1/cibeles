import { Injectable } from "@angular/core";
import { SearchBarFilters } from "../_models/search-bar/searchBarFilters";
import { MessageService } from "../_services/messages/message.service";
import { Router } from "@angular/router";
import { Urls } from "../_common/routes";
import { PlansService } from "../_services/plans/plans.service";
import { Plan } from "../_models/_entity-models/plan";
import { TravelService } from "../_services/travel/travel.service";
import { SearchBarOptions } from "../_models/search-bar/searchBarOptions";
import { PlacesService } from "../_services/places/places.service";
import { Transport } from "../_common/enumeradores.enum";
import { TravelRoutesService } from "../_services/travel-routes/travel-routes.service";
import { TravelDateService } from "../_services/travel-date/travel-date.service";
import { Place } from "../_models/_entity-models/place";
import { TravelRoute } from "../_models/_entity-models/travel-routes";
import { TavelDate } from "../_models/_entity-models/travelDate";
import { runInThisContext } from "vm";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { Observable, of, forkJoin } from "rxjs";

@Injectable()
export class SearchBarController{
    constructor(
        public messageService : MessageService,
        public router : Router,
        public planService : PlansService,
        public travelService : TravelService,
        public placeService : PlacesService,
        public travelRouteService : TravelRoutesService,
        public travelDatesService : TravelDateService
    ) {  
        this.places = [];
        this.routes = [];
        this.travelDate = [];
    }

    public places : Place[];
    public routes : TravelRoute[];
    public travelDate : TavelDate[];

    public search(filters : SearchBarFilters){
        this.travelService.GetList().subscribe(
            result => {
                console.log(
                    result['hydra:member']
                );                 
            }
        )
        this.messageService.success(filters.idFavoriteDestiny.toString());
        this.router.navigateByUrl(Urls.SEARCH_RESULT);
    }

    public loadResources() : Observable<any>{
        return forkJoin(
            this.placeService.GetList(),    
            this.travelRouteService.GetList(),    
            this.travelDatesService.GetList()
        );
    }

    public loadOptions(options : SearchBarOptions){
        this.loadResources().subscribe(
            result =>{
                this.places = result[0]['hydra:member'];

                this.routes = result[1]['hydra:member'];

                this.travelDate = result[2]['hydra:member'];

                console.log(this.places[0]);
                console.log(this.routes);
                console.log(this.travelDate);                

                options = options != null? options : new SearchBarOptions();

                options.origin = this.places;

                options.transport = [
                    Transport[1], 
                    Transport[2]
                ];
            }
        )
    }

    public loadDestinies(options : SearchBarOptions, idSelected : string){
        options.destiny = [];
        var routes = this.routes.filter(e => e.Origin == idSelected); 
        if(routes){
            routes.forEach(route => { 
                options.destiny.push(...this.places.filter(e => e['@id'] == route.Destination));
            });
        }                
    }

    public loadDates(options : SearchBarOptions, idOrigen : string, idDestiny : string){
        options.dates = this.travelDate;
    }

}