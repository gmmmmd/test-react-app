import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

//import classes from './Profile.module.css';

const Profile = (props) => {
  console.log(props)
  return (
    <div>
      <ProfileInfo
        profile={props.profile}
        status={props.getUserStatus}
        updateStatus={props.updateStatus}
      />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;

// newPostText={props.profilePage.newPostText}