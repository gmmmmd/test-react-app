import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className={classes.postsBlock}>
      <h3 className={classes.title}>My posts</h3>
      <div>
        <div className={classes.textareaWrapper}>
          <textarea className={classes.textarea}></textarea>
        </div>
        <div className={classes.buttonWrapper}>
          <button className={classes.button}>Add post</button>
        </div>
        <div className={classes.items}>
          <Post message='Hi, how are you?' like='15' />
          <Post message="It's my first post" like='7' />
        </div>
      </div>
    </div>
  );
}

export default MyPosts;