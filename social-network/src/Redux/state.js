let renderEntireTree = () => {
  console.log("State changed");
};

let state = {
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
    newPostText: "...",
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
    newPostText: "I did it!",
  },
  sidebar: {
    names: [
      { id: 1, name: "Dima" },
      { id: 2, name: "Egor" },
      { id: 3, name: "Vadim" },
    ],
  },
};

window.state = state;

export let addNewPost = () => {
  let newPost = {
    id: 3,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };

  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = "";
  renderEntireTree(state);
};

export let updatePostText = (newText) => {
  state.profilePage.newPostText = newText;
  renderEntireTree(state);
};

export let updateTextAreaText = (newText) => {
  state.dialogsPage.newPostText = newText;
  if (state.dialogsPage.newPostText.length > 15) {
    state.dialogsPage.newPostText = "";
  }
  renderEntireTree(state);
};

export let subscribe = (observe) => {
  renderEntireTree = observe;
};

export default state;
