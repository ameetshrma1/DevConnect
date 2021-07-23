import { v4 } from "uuid";
import { SET_ALERT, REMOVE_ALERT } from "./types";

export const setAlert = (msg: any, alertType: any) => (dispatch: any) => {
  const id = v4();
  console.log("SETALERT RUNS");
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id },
  });
};
