const initialState = {
  navbar: [
    { id: 1, item: 'Profile', to: 'profile' },
    { id: 2, item: 'Messages', to: 'dialogs' },
    { id: 3, item: 'News', to: 'news' },
    { id: 4, item: 'Music', to: 'music' },
    { id: 5, item: 'Settings', to: 'settings' },
    { id: 6, item: 'Friends', to: 'friends' }
  ]
};

const navbarReducer = (state = initialState, action) => {
  return state;
}

export default navbarReducer;