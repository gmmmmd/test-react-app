import React from 'react';
import { Navigate } from 'react-router-dom';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
  const state = props.dialogsPage;

  const dialogsElement = state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id} />);
  const messagesElement = state.messages.map(m => <Message key={m.id} message={m.message} />);
  const newMessageBody = state.newMessageBody;

  const onSendMessageClick = () => {
    props.sendMessageCreator();
  };

  const onNewMessageChange = (e) => {
    const body = e.target.value;
    props.updateNewMessageBody(body);
  };

  if(!props.isAuth) {
    return (
      <Navigate to="/login" />
    );
  }

  return (
    <div className={classes.dialogs}>
      <ul className={classes.items}>
        { dialogsElement }
      </ul>
      <div className={classes.wrapper}>
        <ul className={classes.messages}>
          { messagesElement }
        </ul>
        <textarea className={classes.textarea}
          placeholder="Enter your message"
          value={newMessageBody}
          onChange={onNewMessageChange}
        >
        </textarea>
        <button className={classes.button} onClick={onSendMessageClick}>Send message</button>
      </div>
    </div>
  );
};

export default Dialogs;