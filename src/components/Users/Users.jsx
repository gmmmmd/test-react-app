import React from 'react';
import styles from './Users.module.css';
import userPhoto from './../../assets/images/avatar.png';

const Users = (props) => {
  
  const pagesCount = Math.ceil (props.totalUsersCount / props.pageSize);

  const pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const curPage = props.currentPage;
  const curPF = ((curPage - 5) < 0) ? 0 : curPage - 5;
  const curPL = curPage + 5;
  const slicedPages = pages.slice(curPF, curPL);  

  return (
    <div>
      <div className={styles.Pagination}>
        { slicedPages.map(i => {
          return (
            <button
              className={props.currentPage === i ? styles.selectedPage : null}
              onClick={(e) => { 
                props.onPageChanged(i); 
              }}
            >
              { i }
            </button>
          );
        }) }
      </div>
      <ul className={styles.list}>
        {
          props.users.map(u => <li key={u.id} className={styles.item}>
            <div className={styles.imgBox}>
              <div>
                <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="аватар" className={styles.userPhoto} />
              </div>
              <div className={styles.buttonWrapper}>
                { u.followed
                  ? <button className={styles.button} onClick={() => { props.unfollow(u.id); }}>Unfollow</button>
                  : <button className={styles.button} onClick={() => { props.follow(u.id); }}>Follow</button> }
              </div>
            </div>
            <div className={styles.descriptionBlock}>
              <div>
                <div>{ u.name }</div>
                <div>{ 'u.status' }</div>
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
};

export default Users;