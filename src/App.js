import './App.css';

import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';



const App = (props) => {
  console.log(props);
  return (
    <div className="app-wrapper container">
      <Header />
      <Navbar />
      {/* <Navbar state={props.state.navbarComponents}/> */}
      <div className="app-wrapper__content">
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/dialogs/*" element={<DialogsContainer />} />
          <Route path="/users" element={<UsersContainer />} />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;