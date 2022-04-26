import React from 'react';
import * as axios from 'axios';
import styles from './Users.module.css';
import userPhoto from './../../assets/images/avatar.png';


class Users extends React.Component {

  componentDidMount() {
    if (this.props.users.length === 0) {
      axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then(response => {
          this.props.setUsers(response.data.items);
        });
    }
  }

  render() {
    return (
      <div>
        <div>
          <span className={styles.selectedPage}>1</span>
          <span className={styles.selectedPage}>2</span>
          <span className={styles.selectedPage}>3</span>
          <span className={styles.selectedPage}>4</span>
          <span className={styles.selectedPage}>5</span>
        </div>
        <ul className={styles.list}>
          {
            this.props.users.map(u => <li key={u.id} className={styles.item}>
              <div className={styles.imgBox}>
                <div>
                  <img src={u.photos.small != null ? u.photo.small : userPhoto} alt="аватар" className={styles.userPhoto} />
                </div>
                <div className={styles.buttonWrapper}>
                  { u.followed
                    ? <button className={styles.button} onClick={() => { this.props.unfollow(u.id); }}>Unfollow</button>
                    : <button className={styles.button} onClick={() => { this.props.follow(u.id); }}>Follow</button> }
                </div>
              </div>
              <div className={styles.descriptionBlock}>
                <div>
                  <div>{ u.name }</div>
                  <div>{ u.status }</div>
                </div>
                <div>
                  <div>{ 'u.location.country' }</div>
                  <div>{ 'u.location.city' }</div>
                </div>
              </div>
            </li>
            )
          }
        </ul>
      </div>
    );
  }
}

export default Users;