import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

  const dialogsElement = props.state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id} />);
  const messagesElement = props.state.messages.map(m => <Message key={m.id} message={m.message} />);


  return (
    <div className={classes.dialogs}>
      <ul className={classes.items}>
        {dialogsElement}
      </ul>
      <ul className={classes.messages}>
        {messagesElement}
      </ul>
    </div>
  )
}

export default Dialogs;