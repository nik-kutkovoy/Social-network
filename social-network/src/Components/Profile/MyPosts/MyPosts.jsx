import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postElements = props.profilePage.posts.map((el) => {
    return <Post likesCount={el.likesCount} message={el.message} />;
  });

  let addPost = () => {
    props.addPost();
  };

  let onPostChange = (event) => {
    let text = event.target.value;
    props.onPostChange(text);
  };

  return (
    <div className={s.postsBlock}>
      <div className={s.header}>My Posts</div>
      {postElements}
      <textarea
        onChange={onPostChange}
        value={props.profilePage.newPostText}
        placeholder={props.profilePage.placeholderPostText}
      ></textarea>
      <div>
        <button onClick={addPost}>
          Add post
          <img src="https://img.icons8.com/glyph-neue/14/000000/checkmark.png" />
        </button>
      </div>
    </div>
  );
};

export default MyPosts;
