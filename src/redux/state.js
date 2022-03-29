let rerenderEntireTree = () => {
  console.log('State changed');
}

const state = {
  profilePage: {
    posts: [
      { id: 1, message: 'Hi, how are you?', likesCount: 15 },
      { id: 2, message: 'It\'s my first post', likesCount: 7 },
      { id: 3, message: 'BlaBla', likesCount: 11 },
      { id: 4, message: 'DaDa', likesCount: 11 }
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
    ]
  },

  navbarComponents: {
    navbar: [
      {id:1, item: 'Profile', to: 'profile'},
      {id:2, item: 'Messages', to: 'dialogs'},
      {id:3, item: 'News', to: 'news'},
      {id:4, item: 'Music', to: 'music'},
      {id:5, item: 'Settings', to: 'settings'},
      {id:6, item: 'Friends', to: 'friends'}
    ]
  }
}
export const addPost = () => {
  const newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likeCount: 0
  };
  
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
  
}

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
}

export default state;