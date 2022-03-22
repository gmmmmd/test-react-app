import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <a href='/'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5fEh-AgaIxHDuR3oYietdyx7b1tsEigNWJQ' alt='' />
      </a>
    </header>);
}

export default Header;