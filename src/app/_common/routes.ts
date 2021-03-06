export class Urls {
  public static PATH_BASE = '/cibeles';

  public static LOGIN: string = Urls.PATH_BASE + '/login';

  public static INDEX: string = Urls.PATH_BASE + '/index';

  public static INTERNO: string = Urls.PATH_BASE + '/interno';
    public static DETALLE_VUELO: string = Urls.INTERNO + '/detalle-vuelo';
    public static SEARCH_RESULT: string = Urls.INTERNO + '/resultado-busqueda';
    public static CONTACT_US: string = Urls.INTERNO + '/contactenos';
    public static PLANES: string = Urls.INTERNO + '/planes';
    public static ABOUT: string = Urls.INTERNO + '/conocenos';

  public static ADMINISTRATOR: string = Urls.PATH_BASE + '/administracion';
    public static HOME: string = Urls.ADMINISTRATOR + '/home';
    public static PLAN: string = Urls.ADMINISTRATOR + '/plan';
    public static PLAN_ADD: string = Urls.PLAN + '/nuevo';
    public static TRAVELS: string = Urls.ADMINISTRATOR + '/viajes';



}
