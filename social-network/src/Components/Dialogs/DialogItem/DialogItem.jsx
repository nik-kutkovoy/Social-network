import s from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";
import React from "react";

const DialogItem = (props) => {
  return (
    <li className={s.dialog_Item}>
      <NavLink
        to={"/dialogs/" + props.id}
        className={(navData) => (navData.isActive ? s.active : "")}
      >
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png"
            alt="ava"
          />
        </div>
        {props.name}
      </NavLink>
    </li>
  );
};

export default DialogItem;
