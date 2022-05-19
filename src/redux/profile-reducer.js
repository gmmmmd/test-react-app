import { usersAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

const initialState = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likesCount: 15 },
    { id: 2, message: 'It\'s my first post', likesCount: 7 },
    { id: 3, message: 'BlaBla', likesCount: 11 },
    { id: 4, message: 'DaDa', likesCount: 11 },
    { id: 45, message: 'I\'m learn lesson 37', likesCount: 31 },
  ],
  newPostText: 'it-kamasutra.com',
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  //state = profilePage
  
  switch (action.type) {
  case ADD_POST: 
    const newPost = {
      id: 5,
      message: state.newPostText,
      likeCount: 0,
    };      
    return {...state, posts: [...state.posts, newPost], newPostText: ''};
  case UPDATE_NEW_POST_TEXT:
    return {...state, newPostText: action.newText};
  case SET_USER_PROFILE:
    return {...state, profile: action.profile};   
  default:
    return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostActionCreator = (text) =>
  ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });  

export const getUserProfile = (userId) => {
  return (
    (dispatch) => {
      usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
      });
    }
  );
};

export default profileReducer;