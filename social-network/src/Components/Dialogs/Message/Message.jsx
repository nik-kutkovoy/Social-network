import s from "./../Dialogs.module.css";

const Message = (props) => {
  return (
    <li className={s.dialog_Item}>
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png"
          alt="ava"
        />
        <span>Сomment: {props.message}</span>
      </div>
      {props.name}
    </li>
  );
};

export default Message;
