import profileReducer, { addPostActionCreator, deletePost } from './profile-reducer';

const state = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likesCount: 15 },
    { id: 2, message: 'It\'s my first post', likesCount: 7 },
    { id: 3, message: 'BlaBla', likesCount: 11 },
    { id: 4, message: 'DaDa', likesCount: 11 },
    { id: 5, message: 'I\'m learn lesson 37', likesCount: 31 },
  ],
};

it('length of posts should be incremented', () => {

  // 1. test data
  const action = addPostActionCreator('new post');

  // 2. action
  const newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(6);
});

it('message of new post should be correct', () => {

  // 1. test data
  const action = addPostActionCreator('new post');

  // 2. action
  const newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts[5].message).toBe('new post');
});

it('after deleting length of messages should be decrement', () => {
  // 1. test data
  const action = deletePost(1);

  // 2. action
  const newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(4);
});

it(`after deleting length shouldn't be decrement if id is incorrect`, () => {
  // 1. test data
  const action = deletePost(1000);

  // 2. action
  const newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(5);
});