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

export class initLogout implements Action {
  public readonly type = types.INIT_LOGOUT;
}

export class logoutSuccess implements Action {
  public readonly type = types.LOGOUT_SUCCESS;
  constructor(public payload: any) {}
}

export class logoutFailure implements Action {
  public readonly type = types.LOGOUT_FAILURE;
  constructor(public payload: any) {}
}

export class resetLogin implements Action {
  public readonly type = types.RESET_LOGIN;
}

export class resetRegister implements Action {
  public readonly type = types.RESET_REGISTER;
}

export type UserActions =
  | initRegister
  | resetRegister
  | registerSuccess
  | registerFailure
  | initLogin
  | loginSuccess
  | loginFailure
  | initLogout
  | logoutSuccess
  | resetLogin
  | logoutFailure;
