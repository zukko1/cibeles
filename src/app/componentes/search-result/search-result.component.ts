import { Component, OnInit, Input } from "@angular/core";
import { Plan } from "../../_models/_entity-models/plan";
import { Hotel } from "../../_models/_entity-models/hotel";
import { TavelDate } from "../../_models/_entity-models/travelDate";
import { Travel } from "../../_models/_entity-models/travel";
import { CacheHelper } from "../../_helpers/cacheHelper";

@Component({
    selector:'result-search',
    templateUrl:'./search-result.component.html',
    styleUrls:[
        './search-result.component.css'
    ]
})
export class SearchResultComponent implements OnInit{
    
    public travels : Travel[] = [];

    constructor(){

    }

    ngOnInit(): void {
        console.log("Init result");
        console.log(CacheHelper.GetFilteredTrips());
        let filteredTrips = CacheHelper.GetFilteredTrips();
        for(var i in filteredTrips){
            this.travels.push(filteredTrips[i]);
        }
        console.log(this.travels);
    }

    getDays(date, date3){
        return 0;
    }
}