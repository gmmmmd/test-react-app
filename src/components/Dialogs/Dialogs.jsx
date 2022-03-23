import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = () => {

  const dialogs = [
    { id: 1, name: 'Dima' },
    { id: 2, name: 'Andrey' },
    { id: 3, name: 'Sveta' },
    { id: 4, name: 'Sasha' },
    { id: 5, name: 'Victor' },
    { id: 6, name: 'Valera' }
  ];

  const messages = [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How is your it-kamasutra?' },
    { id: 3, message: 'Yo' },
    { id: 4, message: 'Yo' },
    { id: 5, message: 'Yo' }
  ];

  const dialogsElement = dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id} />);
  const messagesElement = messages.map(m => <Message key={m.id} message={m.message} />);


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