import { User } from "../_models/user";

export class AppContext{
  
    public Token: string;
    public CurrentUser : User;
    public CurrentRol : string[];
    public CurrentEntity : string;
    public IdEntity : number;
    constructor(){}

    public static fromJSON(json: any): AppContext {
        if (typeof json === 'string') {
          return JSON.parse(json, AppContext.reviver);
        } else if (json !== undefined && json !== null) {
          let context = Object.create(AppContext.prototype);
          return Object.assign(context, json);
        } else {
          return json;
        }
    }

    public static reviver(key: string, value: any): any {
        return key === '' ? AppContext.fromJSON(value) : value;
    }

    public static fromEntitieJSON<T>(json: any): T {
      if (typeof json === 'string') {
        return JSON.parse(json, AppContext.reviver);
      } else if (json !== undefined && json !== null) {
        let modelBase = Object.create(AppContext.prototype);
        return Object.assign(modelBase, json);
      } else {
        return json;
      }
    }
}