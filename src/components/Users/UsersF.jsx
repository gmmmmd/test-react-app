import React from 'react';
import * as axios from 'axios';
import styles from './Users.module.css';
import userPhoto from './../../assets/images/avatar.png';

const Users = (props) => {

  const getUsers = () => {
    if (props.users.length === 0) {
      axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then(response => {
          props.setUsers(response.data.items);
        });
    }
  };

  return (
    <div>
      <button onClick={getUsers}>Get Users</button>  
      {
        props.users.map(u => <div key={u.id} className={styles.wrapper}>
          <span>
            <div>
              <img src={u.photos.small != null ? u.photo.small : userPhoto} alt="аватар" className={styles.userPhoto} />
            </div>
            <div>
              {u.followed
                ? <button onClick={() => { props.unfollow(u.id); }}>Unfollow</button>
                : <button onClick={() => { props.follow(u.id); }}>Follow</button>}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{'u.location.country'}</div>
              <div>{'u.location.city'}</div>
            </span>
          </span>
        </div>)
      }
    </div>
  );
};

export default Users;