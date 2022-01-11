// https://github.com/nik-kutkovoy/Social-network.git

const ADD_NEW_POST = "ADD-NEW-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE_BODY = "SEND-MESSAGE-BODY";

let store = {
  _callSubscriber: function () {
    console.log("State changed");
  },

  _state: {
    profilePage: {
      posts: [
        {
          id: 1,
          message: "Hi it`s my first post =)",
          likesCount: 15,
        },
        {
          id: 2,
          message: "Дуров не вернул стену, а я вернул :)",
          likesCount: 20,
        },
      ],
      newPostText: "",
    },
    dialogsPage: {
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
    },
    sidebar: {
      names: [
        { id: 1, name: "Dima" },
        { id: 2, name: "Egor" },
        { id: 3, name: "Vadim" },
      ],
    },
  },

  getState: function () {
    return this._state;
  },
  subscribe: function (observe) {
    this._callSubscriber = observe;
  },

  dispatch: function (action) {
    if (action.type === "ADD-NEW-POST") {
      let newPost = {
        id: 3,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-POST-TEXT") {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-MESSAGE-BODY") {
      this._state.dialogsPage.newMessageBody = action.newMessage;
      this._callSubscriber(this._state);
    } else if (action.type === "SEND-MESSAGE-BODY") {
      let newMessage = {
        id: 6,
        message: this._state.dialogsPage.newMessageBody,
        name: "Viktor",
      };
      this._state.dialogsPage.messages.push(newMessage);
      this._state.dialogsPage.newMessageBody = "";
      this._callSubscriber(this._state);
    }
  },
};

export const addNewPostActionCreator = () => {
  return { type: ADD_NEW_POST };
};

export const updatePostTextActionCreator = (text) => {
  return { type: UPDATE_POST_TEXT, newText: text };
};

export const updateNewMessageBody = (message) => {
  return { type: UPDATE_NEW_MESSAGE_BODY, newMessage: message };
};

export const sendMessageBody = () => {
  return { type: SEND_MESSAGE_BODY };
};

export default store;

window.store = store;
