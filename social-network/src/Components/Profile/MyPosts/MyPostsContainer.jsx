import {
  addNewPostActionCreator,
  updatePostTextActionCreator,
} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addNewPostActionCreator());
    },
    onPostChange: (text) => {
      dispatch(updatePostTextActionCreator(text));
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
