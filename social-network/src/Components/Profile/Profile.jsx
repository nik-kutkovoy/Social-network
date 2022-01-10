import state from "../../Redux/state";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={s.content}>
      <ProfileInfo text="Ava + description" />
      <MyPosts
        posts={props.profilePage.posts}
        addPost={props.addPost}
        updatePostText={props.updatePostText}
        newPostText={props.profilePage.newPostText}
      />
    </div>
  );
};

export default Profile;
