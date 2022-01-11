import s from "./../Dialogs.module.css";

const Message = (props) => {
  return <li className={s.dialog_Item}>{props.message}</li>;
};

export default Message;
