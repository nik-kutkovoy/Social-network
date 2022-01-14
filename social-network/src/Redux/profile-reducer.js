const ADD_NEW_POST = "ADD-NEW-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";

let initialState = {
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
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_POST: {
      let newPost = {
        id: 3,
        message: state.newPostText,
        likesCount: 0,
      };
      let stateCopy = { ...state };
      if (newPost.message === "") {
        stateCopy.placeholderPostText = "Add new message...";
        return stateCopy;
      } else {
        stateCopy.placeholderPostText = "Message sent";
        stateCopy.posts.push(newPost);
        stateCopy.newPostText = "";
      }
      return stateCopy;
    }
    case UPDATE_POST_TEXT: {
      let stateCopy = { ...state };
      stateCopy.newPostText = action.newText;
      return stateCopy;
    }
    default:
      return state;
  }
};

export const addNewPostActionCreator = () => {
  return { type: ADD_NEW_POST };
};

export const updatePostTextActionCreator = (text) => {
  return { type: UPDATE_POST_TEXT, newText: text };
};

export default profileReducer;
