const SEND_MESSAGE_BODY = "SEND-MESSAGE-BODY";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";

let initialState = {
  dialogs: [
    { id: 1, name: "Dima" },
    { id: 2, name: "Nikita" },
    { id: 3, name: "Vadim" },
    { id: 4, name: "Egor" },
    { id: 5, name: "Sasha" },
    { id: 6, name: "Viktor" },
  ],
  messages: [
    { id: 1, message: "I`m first)))", name: "Dima" },
    { id: 2, message: "Hello, it`s my social network :)", name: "Nikita" },
    { id: 3, message: "Whow :O", name: "Vadim" },
    { id: 4, message: "Nothing special...", name: "Egor" },
    { id: 5, message: "Cool", name: "Sasha" },
    { id: 6, message: "Map is amazing!", name: "Viktor" },
  ],
  newMessageBody: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE_BODY: {
      let newMessage = {
        id: 6,
        message: state.newMessageBody,
        name: "Viktor",
      };
      let stateCopy = { ...state };
      stateCopy.messages = [...state.messages];
      stateCopy.messages.push(newMessage);
      stateCopy.newMessageBody = "";
      return stateCopy;
    }
    case UPDATE_NEW_MESSAGE_BODY: {
      let stateCopy = { ...state };
      stateCopy.newMessageBody = action.newMessage;
      return stateCopy;
    }
    default:
      return state;
  }
};

export const updateNewMessageBody = (message) => {
  return { type: UPDATE_NEW_MESSAGE_BODY, newMessage: message };
};

export const sendMessageBody = () => {
  return { type: SEND_MESSAGE_BODY };
};

export default dialogsReducer;
