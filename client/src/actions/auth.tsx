import axios from "axios";
import { error } from "console";
import { any } from "prop-types";
import { async } from "q";
import { setAlert } from "./alert";

import { REGISTER_SUCCESS, REGISTER_FAIL } from "./types";

interface IUser {
  email: string;
  name: string;
  password: string;
}

// REGISTER User

export const register =
  ({ name, email, password }: IUser) =>
  async (dispatch: any) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ name, email, password });

    try {
      const res = await axios.post(
        "http://localhost:5000/api/users",
        body,
        config
      );

      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach((error: any) => dispatch(setAlert(error.msg, "danger")));
      }
      dispatch({
        type: REGISTER_FAIL,
      });
    }
  };
