import s from "./../Sidebar.module.css";
import React from "react";

const SidebarItem = (props) => {
  return (
    <li>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png"
        alt="ava"
      />
      <a>{props.name}</a>
    </li>
  );
};

export default SidebarItem;
