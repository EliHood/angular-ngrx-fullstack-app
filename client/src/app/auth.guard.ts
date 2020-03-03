import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from "@angular/router";
import { Observable } from "rxjs";
import decode from "jwt-decode";
@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(public router: Router) {}
  canActivate(): any {
    // this will be passed from the route config
    // on the data property
    const token = localStorage.getItem("auth");
    // decode the token to get its payload
    console.log(token);
    if (token !== null) {
      return true;
    } else {
      return this.router.navigate(["/login"]);
    }
  }
}
