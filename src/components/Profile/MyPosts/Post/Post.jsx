import classes from './Post.module.css';

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src="https://i.imgur.com/SOwTq2D.png" alt="аватар" />
      <div>
        <span>{ props.message } </span>
        <div>
          <span>Like { props.like }</span>
        </div>
      </div>
    </div>
  );
};

export default Post;