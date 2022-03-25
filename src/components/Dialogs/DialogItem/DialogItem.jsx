import classes from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {

  let path = '/dialogs/' + props.id;

  const setActive = ({ isActive }) => isActive ? classes.active : classes.name;

  return (
    <li className={classes.item}>
      
      <NavLink to={path} className={setActive}>
        <img src='https://i.imgur.com/SOwTq2D.png' alt='' className={classes.avatar} />
        {props.name}
      </NavLink>
    </li>
  );
}

export default DialogItem;