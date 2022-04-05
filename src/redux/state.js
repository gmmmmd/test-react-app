import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 15 },
        { id: 2, message: 'It\'s my first post', likesCount: 7 },
        { id: 3, message: 'BlaBla', likesCount: 11 },
        { id: 4, message: 'DaDa', likesCount: 11 },
        { id: 45, message: 'I\'m learn lesson 37', likesCount: 31 }
      ],
      newPostText: 'it-kamasutra.com',
    },

    dialogsPage: {
      messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How is your it-kamasutra?' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'Yo' },
        { id: 5, message: 'Yo' }
      ],

      dialogs: [
        { id: 1, name: 'Dima' },
        { id: 2, name: 'Andrey' },
        { id: 3, name: 'Sveta' },
        { id: 4, name: 'Sasha' },
        { id: 5, name: 'Victor' },
        { id: 6, name: 'Valera' }
      ],
      newMessageBody: '',
    },

    navbarComponents: {
      navbar: [
        { id: 1, item: 'Profile', to: 'profile' },
        { id: 2, item: 'Messages', to: 'dialogs' },
        { id: 3, item: 'News', to: 'news' },
        { id: 4, item: 'Music', to: 'music' },
        { id: 5, item: 'Settings', to: 'settings' },
        { id: 6, item: 'Friends', to: 'friends' }
      ]
    }
  },
  _callSubscriber() {
    console.log('State changed');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.navbarComponents = navbarReducer(this._state.navbarComponents, action);

    this._callSubscriber(this._state);
  },
}

export default store;
window.store = store;