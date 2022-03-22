import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const setActive = ({ isActive }) => isActive ? classes.active : classes.item;

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.items}>
        <li>
          <NavLink to='/profile' className={setActive}>Profile</NavLink>
        </li>
        <li>
          <NavLink to='/dialogs' className={setActive}>Messages</NavLink>
        </li>
        <li>
          <NavLink to='/news' className={setActive}>News</NavLink>
        </li>
        <li>
          <NavLink to='/music' className={setActive}>Music</NavLink>
        </li>
        <li>
          <NavLink to='/settings' className={setActive}>Settings</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;