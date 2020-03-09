import { Actions, Effect, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { Observable, of, pipe } from "rxjs";
import { Action } from "@ngrx/store";
import * as AuthAction from "../actions/auth.actions";
import * as AuthTypes from "../types/auth.types";
import { catchError, map, mergeMap, tap } from "rxjs/operators";
import { AuthService } from "../../services/auth-service.service";
import { Router } from "@angular/router";
@Injectable()
export class AuthEffect {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}

  @Effect()
  addNewUser$: Observable<Action> = this.actions$.pipe(
    ofType(AuthTypes.INIT_REGISTER),
    map((action: AuthAction.initRegister) => action.payload),
    mergeMap(payload => {
      console.log(payload);
      return this.authService.register(payload).pipe(
        map(response => new AuthAction.registerSuccess(response)),
        tap(() => this.router.navigate(["/dashboard"])),
        catchError(error => of(new AuthAction.registerFailure(error.json())))
      );
    })
  );
  @Effect()
  loginUser$: Observable<Action> = this.actions$.pipe(
    ofType(AuthTypes.INIT_LOGIN),
    map((action: AuthAction.initLogin) => action.payload),
    mergeMap(payload => {
      console.log(payload);
      return this.authService.login(payload).pipe(
        map(response => new AuthAction.loginSuccess(response.json())),
        tap(resp => {
          localStorage.setItem("auth", resp.payload.token);
          window.location.href = "/dashboard";
        }),
        catchError(error => of(new AuthAction.loginFailure(error.json())))
      );
    })
  );
  @Effect()
  logoutUser: Observable<Action> = this.actions$.pipe(
    ofType(AuthTypes.INIT_LOGOUT),
    mergeMap(payload => {
      console.log(payload);
      return this.authService.logout().pipe(
        map(response => new AuthAction.logoutSuccess(response)),
        tap(resp => {
          localStorage.removeItem("auth");
          window.location.href = "/login";
        }),
        catchError(error => of(new AuthAction.logoutFailure(error)))
      );
    })
  );
}
