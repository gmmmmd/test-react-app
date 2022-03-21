import classes from './Header.module.css';
console.log(classes)
const Header = () => {
    return (
    <header className={classes.header}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5fEh-AgaIxHDuR3oYietdyx7b1tsEigNWJQ' alt='' />
    </header>);
}

export default Header;