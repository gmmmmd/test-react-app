import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import classes from './ProfileInfo.module.css';
// import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return (
      <Preloader />
    );
  }
  
  return (
    <div className={classes.wrapper}>
      <div>
        <h1>{ props.profile.fullName }</h1>
        <p>Обо мне: { props.profile.aboutMe }</p>
        <p>Поиск работы: { props.profile.lookingForAJob ? 'Рассмотрю предложения' : 'Не ищу работу' }</p>
        <p>Подробнее: { props.profile.lookingForAJobDescription }</p>
      </div>      
      <div className={classes.imgBlock}>
        { /* <img src="https://get-edu.kz/wp-content/uploads/2020/04/helpbox-contact.jpg" alt="" width={300} height={300} /> */ }
        <img src={props.profile.photos.large} alt="user-avatar" width={300} height={300} />
        <ProfileStatusWithHooks 
          status={props.status} 
          updateStatus={props.updateStatus}
        />
      </div>
      <div className={classes.descriptionBlock}>
        <h2>Контакты:</h2>
        <a href={props.profile.contacts.facebook}>{ props.profile.contacts.facebook }</a>
        <a href={props.profile.contacts.github}>{ props.profile.contacts.github }</a>
        <a href={props.profile.contacts.instagram}>{ props.profile.contacts.instagram }</a>
        <a href={props.profile.contacts.mainLink}>{ props.profile.contacts.mainLink }</a>
        <a href={props.profile.contacts.twitter}>{ props.profile.contacts.twitter }</a>
        <a href={props.profile.contacts.vk}>{ props.profile.contacts.vk }</a>
        <a href={props.profile.contacts.website}>{ props.profile.contacts.website }</a>
        <a href={props.profile.contacts.youtube}>{ props.profile.contacts.youtube }</a>
      </div>
    </div>
  );
};


export default ProfileInfo;