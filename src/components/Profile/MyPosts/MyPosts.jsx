import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        New posts
        <div className={classes.items}>
          <Post message='Hi, how are you?' like='15' />
          <Post message="It's my first post" like='7' />
        </div>
      </div>
    </div>
  );
}

export default MyPosts;