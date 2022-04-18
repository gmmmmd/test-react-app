import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  const postsElement = props.posts.map(p => <Post key={p.id} message={p.message} like={p.likesCount} />);

  const newPostElement = React.createRef();

  const addPost = () => {
    props.addPost();
  }

  const onPostChange = () => {
    const text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div className={classes.postsBlock}>
      <h3 className={classes.title}>My posts</h3>
      <div>
        <div className={classes.items}>
          {postsElement}
        </div>
        <div className={classes.wrapper}>
          <textarea className={classes.textarea}
            ref={newPostElement}
            onChange={onPostChange}
            value={props.newPostText} />
          <button className={classes.button} onClick={addPost}>Add post</button>
        </div>
      </div>
    </div>
  );
}

export default MyPosts;