import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postElements = props.posts.map((el) => {
    return <Post likesCount={el.likesCount} message={el.message} />;
  });

  return (
    <div className={s.postsBlock}>
      <div className={s.header}>My Posts</div>
      <textarea></textarea>
      <div>
        <button>
          Add post
          <img src="https://img.icons8.com/glyph-neue/14/000000/checkmark.png" />
        </button>
      </div>
      {postElements}
    </div>
  );
};

export default MyPosts;
