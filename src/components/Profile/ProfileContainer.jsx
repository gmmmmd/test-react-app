import React from 'react';
import  { useParams, useLocation, useNavigate }  from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserProfile } from './../../redux/profile-reducer'; 
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
      userId = 2;
    }
    this.props.getUserProfile(userId);
  }
  render() {    
    return (
      <Profile {...this.props}  profile={this.props.profile} />
    );
  }
}

const AuthRedirectComponent = withAuthRedirect(ProfileContainer);

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});
const WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, { getUserProfile })(WithUrlDataContainerComponent);