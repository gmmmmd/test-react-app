import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';

const Profile = () => {
  return (
    <div>
      <div>
        <img src='https://get-edu.kz/wp-content/uploads/2020/04/helpbox-contact.jpg' alt='' />
      </div>
      <div className={classes.textContent}>
        <div>
          ava + description
          <div></div>
        </div>
        <MyPosts />
      </div>
    </div>
  );
}

export default Profile;