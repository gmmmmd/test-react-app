import styles from './Users.module.css';

const Users = (props) => {

  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1, photoUrl: 'https://eco-stolica.ru/img/comment/NoAvatar_member.png',
        followed: false, fullName: 'Dmitry', status: 'I am looking for a Job right now...',
        location: { city: 'Minsk', country: 'Belarus' }
      },
      {
        id: 2, photoUrl: 'https://eco-stolica.ru/img/comment/NoAvatar_member.png',
        followed: true, fullName: 'Svetlana', status: 'I am so pretty',
        location: { city: 'Minsk', country: 'Belarus' }
      },
      {
        id: 3, photoUrl: 'https://eco-stolica.ru/img/comment/NoAvatar_member.png',
        followed: false, fullName: 'Sergey', status: 'I like football!!!',
        location: { city: 'Kiev', country: 'Ukraine' }
      },
      {
        id: 4, photoUrl: 'https://eco-stolica.ru/img/comment/NoAvatar_member.png',
        followed: true, fullName: 'Andrew', status: 'I am free to help you to create good Video Production',
        location: { city: 'Philadelphia', country: 'United States' }
      }
    ])
  }


  return (
    <div>
      {
        props.users.map(u => <div key={u.id} className={styles.wrapper}>
          <span>
            <div>
              <img src={u.photoUrl} alt="" className={styles.userPhoto} />
            </div>
            <div>
              {u.followed
                ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>)
      }
    </div>
  );
}

export default Users;