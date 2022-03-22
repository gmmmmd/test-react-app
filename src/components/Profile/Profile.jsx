import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';

const Profile = () => {
  return (
    <section className={classes.content}>
      <div>
        <img src='https://get-edu.kz/wp-content/uploads/2020/04/helpbox-contact.jpg' alt='' />
      </div>
      <div>
        ava + description
        <div></div>
      </div>
      <MyPosts />
    </section>
  );
}

export default Profile;