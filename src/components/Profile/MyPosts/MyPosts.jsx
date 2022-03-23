import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

  const posts = [
    {id:1, message: 'Hi, how are you?', likesCount: 15},
    {id:2, message: 'It\'s my first post', likesCount:7}
  ];

  const postsElement = posts.map(p => <Post key={p.id} message={p.message} like={p.likesCount} />);

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
          {postsElement}
        </div>
      </div>
    </div>
  );
}

export default MyPosts;