import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';


// const Navbar = (props) => {
//   const setActive = ({ isActive }) => isActive ? classes.active : classes.item;
//   const navbarElements = props.state.navbar.map(n => <li><NavLink to={n.to} className={setActive} key={n.id}>{n.item}</NavLink></li>);
//   return (
//     <nav className={classes.nav}>
//       <ul className={classes.items}>
//         {navbarElements}
//       </ul>
//     </nav>
//   );
// }

const Navbar = (props) => {
  const setActive = ({ isActive }) => isActive ? classes.active : classes.item;
  //const navbarElements = props.state.navbar.map(n => <li><NavLink to={n.to} className={setActive} key={n.id}>{n.item}</NavLink></li>);

  return (
    <nav className={classes.nav}>
      <ul className={classes.items}>
        {/* {navbarElements} */}
        <li><NavLink to="/profile" className={setActive}>Profile</NavLink></li>
        <li><NavLink to="/dialogs" className={setActive}>Dialogs</NavLink></li>
        <li><NavLink to="/users" className={setActive}>Users</NavLink></li>
        <li><NavLink to="/news" className={setActive}>News</NavLink></li>
        <li><NavLink to="/music" className={setActive}>Music</NavLink></li>
        <li><NavLink to="/settings" className={setActive}>Settings</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;