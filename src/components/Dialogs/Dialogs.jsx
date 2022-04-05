import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {sendMessageCreator, updateNewMessageBodyCreator} from './../../redux/dialogs-reducer';

const Dialogs = (props) => {

  let state = props.store.getState().dialogsPage;

  const dialogsElement = state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id} />);
  const messagesElement = state.messages.map(m => <Message key={m.id} message={m.message} />);
  const newMessageBody = state.newMessageBody;

  const onSendMessageClick = () => {
    const action = sendMessageCreator();
    props.store.dispatch(action)
  }

  const onNewMessageChange = (e) => {
    const body = e.target.value;
    const action = updateNewMessageBodyCreator(body);
    props.store.dispatch(action)
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