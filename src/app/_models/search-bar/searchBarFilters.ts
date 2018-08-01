import { Transport } from "../../_common/enumeradores.enum";

export class SearchBarFilters{

    public idOrigen : string;
    public transportType: string;
    public idFavoriteDestiny : string;
    public idTravelDate : string;
    public peopleNumber : number;
    constructor(){
        this.idOrigen = "";
        this.transportType = "";
        this.idFavoriteDestiny = "";
        this.idTravelDate = "";
        this.peopleNumber = 0;
    }

    public getStringFilters(){
        let idOrigen =  this.idOrigen != "" ? "TravelRoute.Origin=" + this.idOrigen.split("/")[this.idOrigen.split("/").length-1] : "";
        let transportType =  this.transportType != "" ? "&TravelRoute.transport=" + Transport[this.transportType] : "";
        let idFavoriteDestiny =  this.idFavoriteDestiny != "" ? "&TravelRoute.Destination=" + this.idFavoriteDestiny.split("/")[this.idFavoriteDestiny.split("/").length-1] : "";
        return "?" + idOrigen + transportType + idFavoriteDestiny;
    }
}