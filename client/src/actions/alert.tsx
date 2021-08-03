import { v4 } from "uuid";
import { SET_ALERT, REMOVE_ALERT } from "./types";

export const setAlert =
  (msg: any, alertType: any, Timeout = 5000) =>
  (dispatch: any) => {
    const id = v4();
    dispatch({
      type: SET_ALERT,
      payload: { msg, alertType, id },
    });
    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), Timeout);
  };

export const cancelAlert = (id: any) => (dispatch: any) => {
  console.log("CANCELALERT RUNS");
  dispatch({ type: REMOVE_ALERT, payload: id });
};
