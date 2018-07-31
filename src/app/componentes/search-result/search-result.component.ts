import { Component, OnInit, Input } from "@angular/core";
import { Plan } from "../../_models/_entity-models/plan";
import { Hotel } from "../../_models/_entity-models/hotel";
import { TavelDate } from "../../_models/_entity-models/travelDate";
import { Travel } from "../../_models/_entity-models/travel";

@Component({
    selector:'result-search',
    templateUrl:'./search-result.component.html',
    styleUrls:[
        './search-result.component.css'
    ]
})
export class SearchResultComponent implements OnInit{

    @Input() public plan : Plan;
    public hotel : Hotel;    
    public travelDates : TavelDate;
    public travel : Travel;
    ngOnInit(): void {
    }
}