import state from "../../Redux/state";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={s.content}>
      <ProfileInfo text="Ava + description" />
      <MyPosts  posts={props.state.posts}/>
    </div>
  );
};

export default Profile;
