import { SET_ALERT, REMOVE_ALERT } from "../actions/types";

const intialState = [] as any;

export default function (state = intialState, action: any) {
  const { type, payload } = action as any;
  switch (type) {
    case SET_ALERT:
      return [...state, payload];
    case REMOVE_ALERT:
      return state.filter((alert: any) => alert.id !== payload);
    default:
      return state;
  }
}
