import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Login from './components/Login/Login';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';




class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return (
        <Preloader />
      );
    }
    return (
      <div className="app-wrapper container">
        <HeaderContainer />
        <Navbar />
        { /* <Navbar state={props.state.navbarComponents}/> */ }
        <div className="app-wrapper__content">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/profile/" element={<ProfileContainer />}>
              <Route path=":userId" element={<ProfileContainer />} />
            </Route>
            <Route path="/dialogs/*" element={<DialogsContainer />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default compose(
  // withRouter - не работает, 80 урок, нао разобраться
  connect(mapStateToProps, {initializeApp})) (App);