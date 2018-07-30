import { Injectable } from "@angular/core";
import { SearchBarFilters } from "../_models/search-bar/searchBarFilters";
import { MessageService } from "../_services/messages/message.service";
import { Router } from "@angular/router";
import { Urls } from "../_common/routes";
import { PlansService } from "../_services/plans/plans.service";
import { Plan } from "../_models/_entity-models/plan";


@Injectable()
export class SearchBarController{
    constructor(
        public messageService : MessageService,
        public router : Router,
        public planService : PlansService
    ) { //searchBarService

    }

    public Buscar(filters : SearchBarFilters){
        this.planService.GetList()._subscribe(
            result => {
                return result['hydra:member'];
            }
        )
        this.messageService.success(filters.idFavoriteDestiny.toString());
        this.router.navigateByUrl(Urls.SEARCH_RESULT);
    }
}