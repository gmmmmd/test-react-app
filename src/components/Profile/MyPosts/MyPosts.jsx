import React from 'react';
import { Field } from 'redux-form';
import { reduxForm } from 'redux-form';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import { required, maxLengthCreator } from './../../../utils/validators/validators';
import { Textarea } from './../../common/FormsControls/FormsControls';

const maxLength10 = maxLengthCreator(10);

const MyPosts = (props) => {

  const postsElement = props.posts.map(p => <Post key={p.id} message={p.message} like={p.likesCount} />);

  const onAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={classes.postsBlock}>
      <h3 className={classes.title}>My posts</h3>
      <div>
        <div className={classes.items}>
          { postsElement }
        </div>
        <AddPostFormRedux onSubmit={onAddPost} />
      </div>
    </div>
  );
};

const addNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={classes.form}>
      <Field 
        component={Textarea}
        name="newPostText"
        validate={[required, maxLength10]}
        placeholder="Enter your post" 
        className={classes.textarea}
      />
      <button className={classes.button}>Add post</button>
    </form>
  );
};

const AddPostFormRedux = reduxForm({form: 'addNewPostForm'})(addNewPostForm);

export default MyPosts;