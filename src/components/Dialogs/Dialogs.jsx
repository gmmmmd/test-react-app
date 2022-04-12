import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElement = state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id} />);
  let messagesElement = state.messages.map(m => <Message key={m.id} message={m.message} />);
  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessageCreator();
  }

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  }

  return (
    <div className={classes.dialogs}>
      <ul className={classes.items}>
        {dialogsElement}
      </ul>
      <div className={classes.wrapper}>
        <ul className={classes.messages}>
          {messagesElement}
        </ul>
        <textarea className={classes.textarea}
          placeholder='Enter your message'
          value={newMessageBody}
          onChange={onNewMessageChange}
          >
        </textarea>
        <button className={classes.button} onClick={onSendMessageClick}>Send message</button>
      </div>
    </div>
  )
}

export default Dialogs;