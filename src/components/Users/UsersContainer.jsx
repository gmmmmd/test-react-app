import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import Preloader from '../common/Preloader/Preloader';
import { 
  follow, 
  unfollow,
  setCurrentPage,
  toggleFollowingProgress,
  requestUsers,
} from './../../redux/users-reducer';
import { 
  getUsers, 
  getPageSize, 
  getTotalUsersCount, 
  getCurrentPage, 
  getIsFetching, 
  getFollowingInProgress, 
} from './../../redux/users-selectors';
import Users from './Users';



class UsersContainer extends React.Component {
  
  componentDidMount() {
    if (this.props.users.length === 0) {
      this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }
  }

  onPageChanged = (pageNumber) => {    
    this.props.setCurrentPage(pageNumber);
    this.props.getUsers(pageNumber, this.props.pageSize);
  };

  render() {
    return (
      <>
        { this.props.isFetching ? <Preloader /> : null }
        <Users 
          totalUsersCount={this.props.totalUsersCount} 
          pageSize={this.props.pageSize} 
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}

// const mapStateToProps = (state) => {  
//   return {
//     users: state.usersPage.users,
//     pageSize: state.usersPage.pageSize,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     currentPage: state.usersPage.currentPage,
//     isFetching: state.usersPage.isFetching,
//     followingInProgress: state.usersPage.followingInProgress,
//   };
// };

const mapStateToProps = (state) => {  
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

export default compose (
  withAuthRedirect,
  connect(mapStateToProps, { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers: requestUsers })
)(UsersContainer);
