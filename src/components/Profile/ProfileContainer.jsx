import React from 'react';
import  { useParams, useLocation, useNavigate }  from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getUserProfile, getStatus, updateStatus } from './../../redux/profile-reducer'; 
import Profile from './Profile';
import { withAuthRedirect } from './../../hoc/withAuthRedirect';



const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();
    return (
      <Component {...props}  router={{ location, navigate, params }} />
    );
  };
  return ComponentWithRouterProp;
};

class ProfileContainer extends React.Component {
  
  componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }
  render() {
    
    return (
      <Profile
        {...this.props}
        // profile={this.props.profile}
        // status={this.props.status} 
        // updateStatus={this.props.updateStatus}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
});

export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
  withRouter,
  withAuthRedirect,
)(ProfileContainer);;