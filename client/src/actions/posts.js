import {
  fetchPosts,
  createPost as makePost,
  updatePost as modifyPost,
  likePost as starPost,
  deletePost as removePost,
} from "../api";

// fetchPosts();
// Action Creators
export const getPosts = () => async (dispatch) => {
  try {
    console.log("Getting post");
    const { data } = await fetchPosts();
    console.log("data");
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await makePost(post);

    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await modifyPost(id, post);

    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await removePost(id);

    dispatch({ type: "DELETE", payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await starPost(id);

    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};
