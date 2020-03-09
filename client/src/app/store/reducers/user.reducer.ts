import { User } from "../../models/user";
import * as AuthTypes from "../types/auth.types";
import { error } from "@angular/compiler/src/util";
export interface UserState {
  isAuthenticated: boolean;
  error?: string;
  loading: boolean;
}

export const INITIAL_STATE: UserState = {
  isAuthenticated: false,
  error: "",
  loading: false
};

export function userReducer(
  state: UserState = INITIAL_STATE,
  action: any
): UserState {
  switch (action.type) {
    case AuthTypes.INIT_REGISTER:
      console.log(action);
      return { ...state };
    case AuthTypes.REGISTER_SUCCESS:
      console.log(action);
      return { ...state };
    case AuthTypes.REGISTER_FAILURE:
      console.log(action);
      return { ...state, error: action.payload.message };
    case AuthTypes.INIT_LOGIN:
      console.log(action);
      return { ...state, loading: true, error: "" };
    case AuthTypes.LOGIN_SUCCESS:
      console.log(action);
      return {
        ...state,
        error: "",
        loading: true
      };
    case AuthTypes.RESET_LOGIN:
      return {
        ...state,
        error: ""
      };
    case AuthTypes.RESET_REGISTER:
      return {
        ...state,
        error: ""
      };
    case AuthTypes.LOGIN_FAILURE:
      console.log(action);
      return {
        ...state,
        error: action.payload.message,
        loading: false
      };
    case AuthTypes.LOGOUT_SUCCESS:
      console.log(action);
      return;
    case AuthTypes.LOGOUT_FAILURE:
      console.log(action);
      return;
    default:
      return state;
  }
}
