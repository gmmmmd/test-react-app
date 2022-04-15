import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import classes from './Profile.module.css';

const Profile = (props) => {
  
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  );
}

export default Profile;

// newPostText={props.profilePage.newPostText}