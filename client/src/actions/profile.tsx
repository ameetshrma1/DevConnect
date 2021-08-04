import axios from "axios";
import { setAlert } from "./alert";
import {
  GET_PROFILE,
  PROFILE_ERROR,
  GET_PROFILES,
  CLEAR_PROFILE,
  GET_REPOS,
} from "./types";

//Get current user profile

export const getCurrentProfile = () => async (dispatch: any) => {
  try {
    const res = await axios.get("http://localhost:5000/api/profile/me");

    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Get ALL profiles

export const getProfiles = () => async (dispatch: any) => {
  dispatch({ type: CLEAR_PROFILE });
  try {
    const res = await axios.get("http://localhost:5000/api/profile/");

    dispatch({
      type: GET_PROFILES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Get profile by Id

export const getProfileById = (userId: any) => async (dispatch: any) => {
  try {
    const res = await axios.get(`http://localhost:5000/api/profile/${userId}`);

    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Get GitHub Repos

export const getGithubRepos = (username: any) => async (dispatch: any) => {
  try {
    const res = await axios.get(
      `http://localhost:5000/api/profile/github/${username}`
    );

    dispatch({
      type: GET_REPOS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Create or Update Profile

export const createProfile =
  (formData: any, history: any, edit = false) =>
  async (dispatch: any) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const res = await axios.post(
        "http://localhost:5000/api/profile",
        formData,
        config
      );

      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      });

      dispatch(
        setAlert(edit ? "Profile Updated" : "Profile Created", "success")
      );

      if (!edit) {
        history.push("/dashboard");
      }
    } catch (err) {
      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach((error: any) => dispatch(setAlert(error.msg, "danger")));
      }

      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };
