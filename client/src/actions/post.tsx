import axios from "axios";
import { async } from "q";
import { setAlert } from "./alert";
import {
  ADD_POST,
  DELETE_POST,
  GET_POSTS,
  GET_POST,
  POST_ERROR,
  UPDATE_LIKES,
  ADD_COMMENT,
  REMOVE_COMMENT,
} from "./types";

//Get posts

export const getPosts = () => async (dispatch: any) => {
  try {
    const res = await axios.get("api/posts");

    dispatch({
      type: GET_POSTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Add Like
export const addLike = (postId: any) => async (dispatch: any) => {
  try {
    const res = await axios.put(
      `https://stormy-sierra-23811.herokuapp.com/api/posts/like/${postId}`
    );

    dispatch({
      type: UPDATE_LIKES,
      payload: { postId, likes: res.data },
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Remove Like
export const removeLike = (postId: any) => async (dispatch: any) => {
  try {
    const res = await axios.put(
      `https://stormy-sierra-23811.herokuapp.com/api/posts/unlike/${postId}`
    );

    dispatch({
      type: UPDATE_LIKES,
      payload: { postId, likes: res.data },
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//delete post
export const deletePost = (postId: any) => async (dispatch: any) => {
  try {
    const res = await axios.delete(
      `https://stormy-sierra-23811.herokuapp.com/api/posts/${postId}`
    );

    dispatch({
      type: DELETE_POST,
      payload: postId,
    });

    dispatch(setAlert("Post Removed", "success"));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Add post
export const addPost = (formData: any) => async (dispatch: any) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post("api/posts", formData, config);

    dispatch({
      type: ADD_POST,
      payload: res.data,
    });

    dispatch(setAlert("Post Created", "success"));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Get post

export const getPost = (id: string) => async (dispatch: any) => {
  try {
    const res = await axios.get(
      `https://stormy-sierra-23811.herokuapp.com/api/posts/${id}`
    );

    dispatch({
      type: GET_POST,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Add Comment
export const addComment =
  (postId: any, formData: any) => async (dispatch: any) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post(
        `https://stormy-sierra-23811.herokuapp.com/api/posts/comment/${postId}`,
        formData,
        config
      );

      dispatch({
        type: ADD_COMMENT,
        payload: res.data,
      });

      dispatch(setAlert("Comment Added", "success"));
    } catch (err) {
      dispatch({
        type: POST_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };

//Delete Comment
export const deleteComment =
  (postId: any, commentId: any) => async (dispatch: any) => {
    try {
      const res = await axios.delete(
        `https://stormy-sierra-23811.herokuapp.com/api/posts/comment/${postId}/${commentId}`
      );

      dispatch({
        type: REMOVE_COMMENT,
        payload: commentId,
      });

      dispatch(setAlert("Comment Removed", "success"));
    } catch (err) {
      dispatch({
        type: POST_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };
