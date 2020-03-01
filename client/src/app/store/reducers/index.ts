import { ActionReducerMap, createSelector } from "@ngrx/store";
import { userReducer, UserState } from "./user.reducer";

export interface State {
  user: UserState;
}
export const appReducers: ActionReducerMap<State, any> = {
  user: userReducer
};

export const userFeature = (state: State) => state.user;

export const selectUser = createSelector(
  userFeature,
  (state: UserState) => state
);
