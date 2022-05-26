import { Link, NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <header className={classes.header}>
      <Link to="/login" className={classes.logo}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5fEh-AgaIxHDuR3oYietdyx7b1tsEigNWJQ" alt="" />
      </Link>
      <div className={classes.loginBox}>
        { props.isAuth 
          ? 
          <div className={classes.wrap}>
            <p>{ props.login }</p>
            <button onClick={props.logout} className={classes.loginBlock}>Log out</button>
          </div> 
          : <NavLink to={'/login'} className={classes.loginBlock} >Login</NavLink> }
      </div>
    </header>);
};

export default Header;