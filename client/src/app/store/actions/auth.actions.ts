import { Action } from "@ngrx/store";
import * as types from "../types/auth.types";

export class initRegister implements Action {
  public readonly type = types.INIT_REGISTER;
  constructor(public payload: object) {}
}
export class registerSuccess implements Action {
  public readonly type = types.REGISTER_SUCCESS;
  constructor(public payload: any) {}
}
export class registerFailure implements Action {
  public readonly type = types.REGISTER_FAILURE;
  constructor(public payload: any) {}
}

export class initLogin implements Action {
  public readonly type = types.INIT_LOGIN;
  constructor(public payload: object) {}
}

export class loginSuccess implements Action {
  public readonly type = types.LOGIN_SUCCESS;
  constructor(public payload: any) {}
}

export class loginFailure implements Action {
  public readonly type = types.LOGIN_FAILURE;
  constructor(public payload: any) {}
}

export type UserActions =
  | initRegister
  | registerSuccess
  | registerFailure
  | initLogin
  | loginSuccess
  | loginFailure;
