import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogElements = props.state.dialogs.map((el) => {
    return <DialogItem name={el.name} id={el.id} />;
  });

  let messageElements = props.state.messages.map((el) => {
    return (
      <Message
        message={el.message}
        name={el.name}
        updatePostText={props.updatePostText}
        newPostText={props.state.newPostText}
        updateTextAreaText={props.updateTextAreaText}
      />
    );
  });

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
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
