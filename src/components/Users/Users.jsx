import React from 'react';
import * as axios from 'axios';
import styles from './Users.module.css';
import userPhoto from './../../assets/images/avatar.png';


class Users extends React.Component {

  constructor(props) {
    super(props);    
    if (this.props.users.length === 0) {
      axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then(response => {
          this.props.setUsers(response.data.items);
        });
    }
  }

  render() {
    return (
      <ul>
        {
          this.props.users.map(u => <li key={u.id} className={styles.wrapper}>
            <span>
              <div>
                <img src={u.photos.small != null ? u.photo.small : userPhoto} alt="аватар" className={styles.userPhoto} />
              </div>
              <div>
                { u.followed
                  ? <button onClick={() => { this.props.unfollow(u.id); }}>Unfollow</button>
                  : <button onClick={() => { this.props.follow(u.id); }}>Follow</button> }
              </div>
            </span>
            <span>
              <span>
                <div>{ u.name }</div>
                <div>{ u.status }</div>
              </span>
              <span>
                <div>{ 'u.location.country' }</div>
                <div>{ 'u.location.city' }</div>
              </span>
            </span>
          </li>
          )
        }
      </ul>
    );
  }
}

export default Users;