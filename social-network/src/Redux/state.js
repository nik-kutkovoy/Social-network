let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Merry Christmas !", likesCount: 15 },
      { id: 2, message: "Hi it`s my first post =)", likesCount: 20 },
    ],
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
  },
  sidebar: {
    names: [
      { id: 1, name: "Dima" },
      { id: 2, name: "Egor" },
      { id: 3, name: "Vadim" },
    ],
  },
};

export default state;
