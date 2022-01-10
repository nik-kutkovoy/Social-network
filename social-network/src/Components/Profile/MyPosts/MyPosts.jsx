import react from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postElements = props.posts.map((el) => {
    return <Post likesCount={el.likesCount} message={el.message} />;
  });

  let newPostElement = react.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updatePostText(text);
  };

  return (
    <div className={s.postsBlock}>
      <div className={s.header}>My Posts</div>
      <textarea
        ref={newPostElement}
        onChange={onPostChange}
        value={props.newPostText}
      ></textarea>
      <div>
        <button onClick={addPost}>
          Add post
          <img src="https://img.icons8.com/glyph-neue/14/000000/checkmark.png" />
        </button>
      </div>
      {postElements}
    </div>
  );
};

export default MyPosts;
