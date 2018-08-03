import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable ,  of } from 'rxjs';
import { Injectable } from '@angular/core';
import { ModelBase } from '../_models/model-base';
import { environment } from '../../environments/environment';
import { MessageService } from './messages/message.service';
import { URL_SERVICE_BASE } from '../_common/constants';
import { ResponseList } from '../_models/response-list';

@Injectable()
export abstract class ServiceBase<M>{

    public PathBase = URL_SERVICE_BASE;

    private headers = new HttpHeaders({'Content-Type':'application/json'});
    private headersLSJason = new HttpHeaders({'Content-Type':'application/ld+json'});
    
    constructor(public http : HttpClient,
                public messageService : MessageService){}
    
    /**
     * @method  getModel Método que retorna el nombre de la entidad actual para añadirlo a la URL de consumo del servicio
     * @returns string retorna una cadena que contiene el nombre del modelo en el api sin el "/" final
     * @example 'api/users'
     */
    public abstract getModel():string;
    
    /**
     * @method  GetList retorna un observable de llamado al API con la lista de la entidad con la que fue instanciado el servicio
     * @returns Observable<M> observable que contiene la lista de entidades de la BD
     */
    public GetList(){
        let headers = new HttpHeaders({'Content-Type':'application/json'});
        return this.http.get<ResponseList<M>>(
            this.PathBase + this.getModel(), 
            {}
        );
    }
        
    /**
     * @method  GetEntityById Retorna la información de la entidad de la BD dada una identificación
     * @param entity string que pide la identificación de la entidad que quiere ser consultada. En el caso de los usuarios es el 'username' en los demás casos es el id númerico clasico
     * @returns Observable <M> Observable que retorna lleno con un objeto del tipo de entidad con la que fue instanciado el servicio
     */
    public GetEntityById(id: string){

        var url = this.PathBase + this.getModel() + '/' + id;

        return this.http.get<M>(
            url,
            {}
        )
    }
    
    /**
     * @method  GetEntityById Retorna la información de la entidad de la BD dada una dirección de entidad
     * @param entityURI string que pide la identificación de la entidad que quiere ser consultada. 
     * @returns Observable <E> Observable que retorna lleno con un objeto del tipo de entidad con la que fue instanciado el servicio
     */
    public GetEntityByIdStanard<E>(entityURI: string){
        return this.http.get<E>(
            environment.baseIP + entityURI
        )
    }
    /**
     * @method  fillCasesList llena una lista de actuaciones sobre una lista envíada como parámetro
     * @param anotations lista vacía o no de actuaciones que se va a llenar
     * @returns void
     */
    public Save(entity : M){

        var url = this.PathBase + this.getModel();
        var params : string = JSON.stringify(entity);       
        
        return this.http.post<M>(
            url, 
            params, 
            {
                headers: this.headers
            });
    }

    /**
     * @method  fillCasesList llena una lista de actuaciones sobre una lista envíada como parámetro
     * @param anotations lista vacía o no de actuaciones que se va a llenar
     * @returns void
     */
    public Update(entity : M, id : string){
        
        var url = this.PathBase + this.getModel() + '/' + id;
        var params = JSON.stringify(entity);

        return this.http.put(
            url, 
            params, 
            {
                headers: this.headers
            });
    }

    /**
     * @method  fillCasesList llena una lista de actuaciones sobre una lista envíada como parámetro
     * @param anotations lista vacía o no de actuaciones que se va a llenar
     * @returns void
     */
    public Delete(id : string){
        var url = this.PathBase + this.getModel() + '/' + id;
        return this.http.delete(url);
    }
}