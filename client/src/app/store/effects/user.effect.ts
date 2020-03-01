import { Actions, Effect, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Action } from "@ngrx/store";
import * as AuthAction from "../actions/auth.actions";
import * as AuthTypes from "../types/auth.types";
import { catchError, map, mergeMap, tap } from "rxjs/operators";
import { AuthService } from "../../services/auth-service.service";
@Injectable()
export class AuthEffect {
  constructor(private actions$: Actions, private authService: AuthService) {}

  @Effect()
  addNewUser$: Observable<Action> = this.actions$.pipe(
    ofType(AuthTypes.INIT_REGISTER),
    map((action: AuthAction.initRegister) => action.payload),
    mergeMap(payload => {
      console.log(payload);
      return this.authService.register(payload).pipe(
        map(response => {
          console.log(response);
          return new AuthAction.registerSuccess(response);
        }),
        catchError(error => of(new AuthAction.registerFailure(error)))
      );
    })
  );
}
