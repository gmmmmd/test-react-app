import React from 'react';
import MyPosts from './MyPosts';
import { addPostActionCreator, updateNewPostActionCreator } from './../../../redux/profile-reducer';

const MyPostsContainer = (props) => {
  
  const state = props.store.getState();

  const addPost = () => {
    props.store.dispatch(addPostActionCreator());
  }

  const onPostChange = (text) => {
    const action = updateNewPostActionCreator(text);
    props.store.dispatch(action);
  }

  return (
    <MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={state.profilePage.posts} NewPostText={state.profilePage.newPostText} />
  );
}

export default MyPostsContainer;