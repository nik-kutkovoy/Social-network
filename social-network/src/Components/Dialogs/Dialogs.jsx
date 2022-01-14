import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import React from "react";

const Dialogs = (props) => {
  let dialogElements = props.dialogsPage.dialogs.map((el) => {
    return <DialogItem name={el.name} id={el.id} />;
  });

  let messageElements = props.dialogsPage.messages.map((el) => {
    return <Message message={el.message} />;
  });

  let updateTextarea = (event) => {
    let text = event.target.value;
    props.updateTextarea(text);
  };

  let sendMessage = () => {
    props.sendMessage();
  };

  return (
    <div className={s.dialogs}>
      <div className={s.header}>Chat</div>
      <div className={s.wrapper}>
        <div className={s.dialog}>
          <ul>{dialogElements}</ul>
        </div>
        <div className={s.vl}></div>
        <div className={s.messages}>
          <ul>{messageElements}</ul>
          <textarea
            placeholder="Write new message..."
            value={props.dialogsPage.newMessageBody}
            onChange={updateTextarea}
          ></textarea>
          <div>
            <button onClick={sendMessage}>
              Send
              <img src="https://img.icons8.com/glyph-neue/14/000000/checkmark.png" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
