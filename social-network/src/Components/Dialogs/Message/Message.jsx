import s from "./../Dialogs.module.css";
import React from "react";

const Message = (props) => {
  return <li className={s.dialog_Item}>{props.message}</li>;
};

export default Message;
