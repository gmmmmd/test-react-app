import React from 'react';
import * as axios from 'axios';
import styles from './Users.module.css';
import userPhoto from './../../assets/images/avatar.png';


class Users extends React.Component {

  componentDidMount() {
    if (this.props.users.length === 0) {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
          this.props.setUsers(response.data.items);
          this.props.setTotalUsersCount(response.data.totalCount);
        });
    }
  }

  onPageChanged (pageNumber) {
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
      });
  }

  render() {

    const pagesCount = Math.ceil (this.props.totalUsersCount / this.props.pageSize);

    const pages = [];

    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    const curPage = this.props.currentPage;
    const curPF = ((curPage - 3) < 0) ? 0 : curPage - 3;
    const curPL = curPage + 3;
    const slicedPages = pages.slice(curPF, curPL);

    

    return (
      <div>
        <div className={styles.Pagination}>
          { slicedPages.map(i => {
            return (
              <button
                className={this.props.currentPage === i && styles.selectedPage}
                onClick={() => {this.onPageChanged(i);}}
              >
                { i }
              </button>
            );
          }) }
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