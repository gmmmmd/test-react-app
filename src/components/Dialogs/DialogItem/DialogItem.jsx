import classes from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {

  let path = '/dialogs/' + props.id;

  const setActive = ({ isActive }) => isActive ? classes.active : classes.item;

  return (
    <li>
      <NavLink to={path} className={setActive}>{props.name}</NavLink>
    </li>
  );
}

export default DialogItem;