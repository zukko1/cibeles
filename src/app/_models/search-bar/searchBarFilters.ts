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
}