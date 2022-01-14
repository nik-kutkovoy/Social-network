import s from "./ProfileInfo.module.css";
import React from "react";

const ProfileInfo = (props) => {
  return (
    <div>
      <div className={s.content_img}>
        <img src="https://wallpaperaccess.com/full/7274183.jpg"></img>
      </div>
      <div className={s.descriptionBlock}>{props.text}</div>
    </div>
  );
};

export default ProfileInfo;
