export class SearchBarFilters{
    public idOrigen : number;
    public transportType: number;
    public idFavoriteDestiny : number;
    public startDate : Date;
    public peopleNumber : number;
    constructor(){
        this.idOrigen = 0;
        this.transportType = 0;
        this.idFavoriteDestiny = 0;
        this.startDate = new Date(Date.now());
        this.peopleNumber = 0;
    }
}