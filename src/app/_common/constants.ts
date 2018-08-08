import { environment } from "../../environments/environment";

export const URL_SERVICE_BASE = environment.baseIP + environment.baseURL + environment.baseAPIUrl;
export const URL_MEDIA_BASE = environment.baseIP + environment.baseURL + environment.baseMediaUrl;
export const URL_BASE_API = environment.baseAPIUrl;
export const SESSION_APP_CONTEXT = "AppContext";