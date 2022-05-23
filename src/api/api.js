import * as axios from 'axios';

const instanse = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'c6121b40-e724-42b1-b3ef-5a6e3a1be14e',
  },
});

// export const getUsers = (currentPage = 1, pageSize = 5) => {
//   return (
//     instanse.get(`users?page=${currentPage}&count=${pageSize}`)
//       .then(response => {
//         return (
//           response.data
//         );
//       })
//   );
// };

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 5) {
    return (
      instanse.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
          return (
            response.data
          );
        })
    );
  },
  getUnfollowUser(userId) {
    return (
      instanse.delete(`follow/${userId}`)
        .then(response => {
          return (
            response.data
          );
        })
    );
  },
  getFollowUser(userId) {
    return (
      instanse.post(`follow/${userId}`)
        .then(response => {
          return (
            response.data
          );
        })
    );
  },
};

export const profileAPI = {
  getProfile(userId) {
    return (
      instanse.get(`profile/${userId}`)
    );
  },
  getStatus(userId) {
    return (
      instanse.get(`profile/status/${userId}`)
    );
  },
  updateStatus(status) {
    return (
      instanse.put('profile/status', { status })
    );
  },
};

export const authAPI = {
  me() {
    return (
      instanse.get('auth/me')
    );
  },
};