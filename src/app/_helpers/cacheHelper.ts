import {AppContext} from '../_common/app-context';
import {SESSION_APP_CONTEXT} from '../_common/constants';
import {User} from '../_models/user';
import {Role} from '../_models/_entity-models/role';
import {Travel} from '../_models/_entity-models/travel';

/**
 * Helper para el uso de la caché/LocalStorage de la aplicación
 * @name CacheHelper
 */
export class CacheHelper {

  /**
   * @static
   * @method SetContext Metodo que se usa para asignar el contexto actual de la aplicación.
   * @param context contiene el contexto de la aplicación
   * @returns void
   */
  public static SetContext(context: AppContext) {
    sessionStorage.removeItem(SESSION_APP_CONTEXT);
    sessionStorage.setItem(SESSION_APP_CONTEXT, JSON.stringify(context));
  }

  /**
   * @static
   * @method GetContext Obtiene el contexto actual de la aplicació
   * @param
   * @returns AppContext
   */
  public static GetContext(): AppContext {
    let result = AppContext.fromJSON(sessionStorage.getItem(SESSION_APP_CONTEXT));
    if (result == null) {
      this.SetContext(new AppContext());
      result = AppContext.fromJSON(sessionStorage.getItem(SESSION_APP_CONTEXT));
    }

    return result;
  }

  /**
   * @static
   * @method SetUser Asigna usuario actual en el contexto de la aplicación
   * @param User = usuario actual que se va a almacenar en el contexto de la aplicación
   * @returns void
   */
  public static SetUser(user: User) {
    let aux = this.GetContext();
    aux.CurrentUser = user;
    this.SetContext(aux);
  }

  /**
   * @static
   * @method GetCurrentUser Obtiene en usuario actual almacenado en la caché de la aplicación.
   * @param
   * @returns User
   */
  public static GetCurrentUser(): User {
    let context = JSON.parse(sessionStorage.getItem(SESSION_APP_CONTEXT));
    return AppContext.fromEntitieJSON<User>(context.CurrentUser);
  }

  /**
   * @static
   * @method SetToken Asigna token actual en el contexto de la aplicación
   * @param token token actual que se va a almacenar en el contexto de la aplicación
   * @returns
   */
  public static SetToken(token: string) {
    let aux = this.GetContext();
    aux.Token = token;
    this.SetContext(aux);
  }

  /**
   * @static
   * @method
   * @param
   * @returns
   */
  public static GetToken(): string {
    return this.GetContext().Token;
  }

  /**
   * @static
   * @method SetRole Asigna los roles actuales en el contexto de la aplicación
   * @param roles vector que contiene los tokens actuales que se va a almacenar en el contexto de la aplicación.
   * @returns
   */
  public static SetRole(roles: string[]) {
    let aux = this.GetContext();
    aux.CurrentRol = roles;
    this.SetContext(aux);
  }

  /**
   * @static
   * @method
   * @param
   * @returns
   */
  public static GetCurrentRole(): Role[] {
    let context = JSON.parse(sessionStorage.getItem(SESSION_APP_CONTEXT));
    return AppContext.fromEntitieJSON<Role[]>(context.CurrentRol);
  }

  /**
   * @static
   * @method SetEntity Asigna la entidad actual en el contexto de la aplicación
   * @param entity enttidad actual que se va a almacenar en el contexto de la aplicación. Puede ser un Abogado, un cliente o cualquier otra entidad
   * @returns
   */
  public static SetEntity(entity: string) {
    let aux = this.GetContext();
    aux.CurrentEntity = entity;
    this.SetContext(aux);
  }


  /**
   * @static
   * @method GetCurrentEntity obtiene la entidad del usuario actual logueado
   * @returns retorna un string que hace referencia a la entidad en el API
   * @example '/CRMDestra-Back/public/index.php/api/#entidad#/#id#'
   */
  public static GetCurrentEntity(): string {
    return this.GetContext().CurrentEntity;
  }


  /**
   * @static
   * @method SetIdEntity Asigna identificación de la entidad para realizar consultas por Id en la aplicación
   * @param entity = Identificación de la entidad en la aplicación
   * @returns void
   */
  public static SetIdEntity(entity: number) {
    let aux = this.GetContext();
    aux.IdEntity = entity;
    this.SetContext(aux);
  }

  /**
   * @static
   * @method GetCurrentIdEntity Obtiene la identificación de la entidad actual en el sistema. Ya sea para abogados o para clientes.
   * @param
   * @returns number. Retorna el id de la entidad logueada
   */
  public static GetCurrentIdEntity(): number {
    return this.GetContext().IdEntity;
  }

  /**
   * @static
   * @method SetFilteredTrips Asigna viajes filtrados por el buscador en la última consulta realizada
   * @param travels = viajes que se va a almacenar en el contexto de la aplicación
   * @returns void
   */
  public static SetFilteredTrips(travels: Travel[]) {
    let aux = this.GetContext();
    aux.FilteredTrips = travels;
    this.SetContext(aux);
  }

  /**
   * @static
   * @method GetCurrentUser Obtiene en usuario actual almacenado en la caché de la aplicación.
   * @param
   * @returns User
   */
  public static GetFilteredTrips(): Travel[] {
    let context = JSON.parse(sessionStorage.getItem(SESSION_APP_CONTEXT));
    return AppContext.fromEntitieJSON<Travel[]>(context.FilteredTrips);
  }
}

/**
 * public static fromJSON(json: any): Person {
    if (typeof json === 'string') {
      return JSON.parse(json, Person.reviver);
    } else if (json !== undefined && json !== null) {
      let person = Object.create(Person.prototype);
      return Object.assign(person, json);
    } else {
      return json;
    }
  }

 public static reviver(key: string, value: any): any {
    return key === '' ? Person.fromJSON(value) : value;
  }
 */
