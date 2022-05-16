import { Link, NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = (props) => {
  console.log(props)
  return (
    <header className={classes.header}>
      <Link to="/" className={classes.logo}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5fEh-AgaIxHDuR3oYietdyx7b1tsEigNWJQ" alt="" />
      </Link>
      <div className={classes.loginBox}>
        { props.isAuth ? <p>{ props.login }</p> : <NavLink to={'/login'} className={classes.loginBlock} >Login</NavLink> }
      </div>
    </header>);
};

export default Header;