import { Injectable } from "@angular/core";
import { SearchBarFilters } from "../_models/search-bar/searchBarFilters";
import { MessageService } from "../_services/messages/message.service";
import { Router } from "@angular/router";
import { Urls } from "../_common/routes";


@Injectable()
export class SearchBarController{
    constructor(
        public messageService : MessageService,
        public router : Router
    ) { //searchBarService

    }

    public Buscar(filters : SearchBarFilters){
        this.messageService.success(filters.idFavoriteDestiny.toString());
        this.router.navigateByUrl(Urls.SEARCH_RESULT);
    }
}