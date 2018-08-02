import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Urls } from "../_common/routes";
import {CacheHelper} from "../_helpers/cacheHelper";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (CacheHelper.GetToken()) {
      // logged in so return true
      return true;
    }
    // not logged in so redirect to login page with the return url
    this.router.navigate([Urls.LOGIN], { queryParams: { returnUrl: state.url }});
    return false;
  }

}
