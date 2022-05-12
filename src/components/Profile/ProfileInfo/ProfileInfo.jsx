import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import classes from './ProfileInfo.module.css';

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
      </div>
      <div className={classes.descriptionBlock}>
        <h2>Контакты:</h2>
        <p>{ props.profile.contacts.facebook }</p>
        <p>{ props.profile.contacts.github }</p>
        <p>{ props.profile.contacts.instagram }</p>
        <p>{ props.profile.contacts.mainLink }</p>
        <p>{ props.profile.contacts.twitter }</p>
        <p>{ props.profile.contacts.vk }</p>
        <p>{ props.profile.contacts.website }</p>
        <p>{ props.profile.contacts.youtube }</p>
      </div>
    </div>
  );
};


export default ProfileInfo;