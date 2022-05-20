import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import profileReducer from './profile-reducer'; 
import dialogsReducer from './dialogs-reducer';
import navbarReducer from './navbar-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';


const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  navbarComponents: navbarReducer,
  usersPage: usersReducer,
  auth: authReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;