import {
  GET_PROFILE,
<<<<<<< HEAD
  GET_PROFILES,
  PROFILE_ERROR,
  CLEAR_PROFILE,
  GET_REPOS,
=======
  PROFILE_ERROR,
  CLEAR_PROFILE,
  UPDATE_PROFILE,
>>>>>>> prashant
} from "../actions/types";

const initialState = {
  profile: null,
  profiles: [],
  repos: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action: any) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false,
      };
<<<<<<< HEAD
    case GET_PROFILES:
      return {
        ...state,
        profiles: payload,
=======
    case UPDATE_PROFILE:
      return {
        ...state,
        profile: payload,
>>>>>>> prashant
        loading: false,
      };
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
        repos: [],
        loading: false,
      };
    default:
    case GET_REPOS:
      return {
        ...state,
        repos: payload,
        loading: false,
      };
      return state;
  }
}
