import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const setActive = ({ isActive }) => isActive ? classes.active : classes.item;

const DialogItem = (props) => {
  let path = '/dialogs/' + props.id;
  return (
    <li>
      <NavLink to={path} className={setActive}>{props.name}</NavLink>
    </li>
  );
}

const Message = (props) => {
  return (
    <li className={classes.message}>{props.message}</li>
  )
}

const Dialogs = () => {
  return (
    <div className={classes.dialogs}>
      <ul className={classes.items}>
        <DialogItem name='Dima' id='1' />
        <DialogItem name='Andrey' id='2' />
        <DialogItem name='Sveta' id='3' />
        <DialogItem name='Sasha' id='4' />
        <DialogItem name='Victor' id='5' />
        <DialogItem name='Valera' id='6' />
      </ul>
      <ul className={classes.messages}>
        <Message message='Hi' />
        <Message message='How is your it-kamasutra?' />
        <Message message='Yo' />
        <Message message='Yo' />
        <Message message='Yo' />
      </ul>
    </div>
  )
}

export default Dialogs;