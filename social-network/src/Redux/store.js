// https://github.com/nik-kutkovoy/Social-network.git

import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

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
      placeholderPostText: "Add new message...",
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
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  },
};

export default store;

window.store = store;
