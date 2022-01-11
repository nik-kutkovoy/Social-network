import { sendMessageBody, updateNewMessageBody } from "../../Redux/state";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import react from "react";

const Dialogs = (props) => {
  let dialogElements = props.state.dialogs.map((el) => {
    return <DialogItem name={el.name} id={el.id} />;
  });

  let messageElements = props.state.messages.map((el) => {
    return <Message message={el.message} />;
  });

  let newMessage = react.createRef();

  let updateTextarea = () => {
    let text = newMessage.current.value;
    props.dispatch(updateNewMessageBody(text));
  };

  let sendMessage = () => {
    props.dispatch(sendMessageBody());
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
            ref={newMessage}
            placeholder="Write new message..."
            value={props.state.newMessageBody}
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
