import classes from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={classes.header}>
      <Link to='/' className={classes.logo}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5fEh-AgaIxHDuR3oYietdyx7b1tsEigNWJQ' alt='' />
      </Link>
    </header>);
}

export default Header;