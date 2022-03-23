import classes from './../Dialogs.module.css';

const Message = (props) => {
  return (
    <li className={classes.message}>{props.message}</li>
  );
}

export default Message;