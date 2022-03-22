import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.imgBlock}>
        <img src='https://get-edu.kz/wp-content/uploads/2020/04/helpbox-contact.jpg' alt='' />
      </div>
      <div className={classes.descriptionBlock}>
        description
      </div>
    </div>
  );
}


export default ProfileInfo;