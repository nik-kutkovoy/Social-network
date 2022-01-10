import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.post}>
      <div className={s.post}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png"
          alt="ava"
        />
        {props.message}
        <div>Like {props.likesCount}</div>
      </div>
    </div>
  );
};

export default Post;
