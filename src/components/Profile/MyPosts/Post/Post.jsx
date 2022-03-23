import classes from './Post.module.css';

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src='https://i.imgur.com/SOwTq2D.png' />
      <div>
        <span>{props.message}</span>
        <span>Like {props.like}</span>
      </div>
    </div>
  );
}

export default Post;