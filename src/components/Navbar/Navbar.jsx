import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const setActive = ({ isActive }) => isActive ? classes.active : classes.item;

const Navbar = (props) => {

  const navbarElements = props.state.navbar.map(n => <li><NavLink to={n.to} className={setActive} key={n.id}>{n.item}</NavLink></li>);

  return (
    <nav className={classes.nav}>
      <ul className={classes.items}>
        {navbarElements}
      </ul>
    </nav>
  );
}

export default Navbar;