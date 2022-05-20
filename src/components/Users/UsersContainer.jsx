import React from 'react';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import Preloader from '../common/Preloader/Preloader';
import { 
  follow, 
  unfollow,
  setCurrentPage,
  toggleFollowingProgress,
  getUsers,
} from './../../redux/users-reducer';
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

const mapStateToProps = (state) => {  
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

const withRedirect = withAuthRedirect(UsersContainer);

export default connect(mapStateToProps, 
  { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers }
)(withRedirect);
