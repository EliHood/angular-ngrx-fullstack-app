import { User } from "../../models/user";
import * as AuthTypes from "../types/auth.types";
export interface UserState {
  isAuthenticated: boolean;
  error?: string;
}

export const INITIAL_STATE: UserState = {
  isAuthenticated: false,
  error: ""
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
      return { ...state };
    case AuthTypes.INIT_LOGIN:
      console.log(action);
      return { ...state };
    case AuthTypes.LOGIN_SUCCESS:
      console.log(action);
      return;
    case AuthTypes.LOGIN_FAILURE:
      console.log(action);
      return;
    default:
      return state;
  }
}
