import {createReducer, on} from "@ngrx/store";
import {decrement, increment, set} from "./counter.actions";

const initialState = 0
export const counterReducer = createReducer(
  initialState,
  on(increment, (state, action) => incrementState(state, action)),
  on(decrement, (state, action) => decrementState(state, action)),
  on(set, (state, action) => action.value)
)

const incrementState = (state: number, action: any) => {
  return state + action.value;
}
const decrementState = (state: number, action: any) => {
  return state - action.value;
}

