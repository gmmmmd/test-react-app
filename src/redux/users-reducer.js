import { usersAPI } from '../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT ='SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

const initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 6,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
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
  case TOGGLE_IS_FETCHING:
    return { ...state, isFetching: action.isFetching };
  case TOGGLE_IS_FOLLOWING_PROGRESS:
    return { 
      ...state, 
      followingInProgress: action.isFetching ? 
        [ ...state.followingInProgress, action.userId ] 
        : state.followingInProgress.filter(id => id !== action.userId),
    };
  default:
    return state;
  }
};

export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching: isFetching});
export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId});

export const requestUsers = (page, pageSize) => {
  return (
    (dispatch) => {
      dispatch(toggleIsFetching(true));
      dispatch(setCurrentPage(page));
      usersAPI.requestUsers(page, pageSize).then(data => {
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
      });
    }
  );
};

export const follow = (userId) => {
  return (
    (dispatch) => {
      dispatch(toggleFollowingProgress(true, userId));
      usersAPI.getFollowUser(userId).then(data => {
        if (data.resultCode === 0) {
          dispatch(followSuccess(userId));
        }
        dispatch(toggleFollowingProgress(false, userId));
      });
    }
  );
};

export const unfollow = (userId) => {
  return (
    (dispatch) => {
      dispatch(toggleFollowingProgress(true, userId));
      usersAPI.getUnfollowUser(userId).then(data => {
        if (data.resultCode === 0) {
          dispatch(unfollowSuccess(userId));
        }
        dispatch(toggleFollowingProgress(false, userId));
      });
    }
  );
};


export default usersReducer;