const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT ='SET_TOTAL_USERS_COUNT';

const initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 6,
  currentPage: 1,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
  case FOLLOW:
    return {
      ...state,
      users: state.users.map((users) => {
        if (users.id === action.userId) {
          return { ...users, followed: true };
        }
        return users;
      }),
    };
  case UNFOLLOW:
    return {
      ...state,
      users: state.users.map((users) => {
        if (users.id === action.userId) {
          return { ...users, followed: false };
        }
        return users;
      }),
    };
  case SET_USERS:
    return {
      ...state,
      users: [...action.users],
    };
  case SET_CURRENT_PAGE:
    return { ...state, currentPage: action.currentPage};
  case SET_TOTAL_USERS_COUNT:
    return { ...state, totalUsersCount: action.count};
  default:
    return state;
  }
};

export const followActionCreator = (userId) => ({ type: FOLLOW, userId });
export const unfollowActionCreator = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersActionCreator = (users) => ({ type: SET_USERS, users });
export const setCurrentPageActionCreator = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCountActionCreator = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount});

export default usersReducer;