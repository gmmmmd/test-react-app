import React from 'react';
import * as axios from 'axios';
import  { useParams, useLocation, useNavigate }  from 'react-router-dom';
import { connect } from 'react-redux';
import { setUserProfile } from './../../redux/profile-reducer'; 
import Profile from './Profile';

const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    let location = useLocation();
    let navigate = useNavigate();
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
      userId = 2;
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then(response => {
        this.props.setUserProfile(response.data);
      });
  }
  render() {
    return (
      <Profile {...this.props}  profile={this.props.profile} />
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});


export default connect(mapStateToProps, { setUserProfile })(withRouter(ProfileContainer));