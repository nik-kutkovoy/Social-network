import react from "react";
import s from "./../Dialogs.module.css";

const Message = (props) => {
  let newMessage = react.createRef();

  let alertMessage = () => {
    let text = newMessage.current.value;
    alert(text);
  };

  let onTextareaChange = () => {
    let text = newMessage.current.value;
    props.updateTextAreaText(text);
  };

  return (
    <li className={s.dialog_Item}>
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png"
          alt="ava"
        />
        <textarea
          ref={newMessage}
          value={props.newPostText}
          onChange={onTextareaChange}
        ></textarea>
        <button onClick={alertMessage}>Send</button>
      </div>
      {props.name}
    </li>
  );
};

export default Message;
