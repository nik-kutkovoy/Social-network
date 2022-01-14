import {
  sendMessageBody,
  updateNewMessageBody,
} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageBody());
    },
    updateTextarea: (text) => {
      dispatch(updateNewMessageBody(text));
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
