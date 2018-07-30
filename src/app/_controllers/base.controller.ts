import { Injectable } from "@angular/core";
import { SearchBarFilters } from "../_models/search-bar/searchBarFilters";
import { MessageService } from "../_services/messages/message.service";
import { Router } from "@angular/router";
import { Urls } from "../_common/routes";
import { PlansService } from "../_services/plans/plans.service";


@Injectable()
export class PlanController{
    constructor(
        public messageService : MessageService,
        public router : Router,
        public servicesService : PlansService
    ) { 
    }
    
    GetPlanes(){
        
    }
}