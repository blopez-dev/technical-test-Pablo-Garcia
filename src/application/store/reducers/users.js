import Types from '../actions/types';

function users(state = {}, action) {
  switch (action.type) {
    case Types.LOAD_USERS:
      return action.payload;
    case Types.UPDATE_USER:
      return {
        ...state,
        data: state.data.map((user) => {
          if (user.id === action.payload.id) {
            return { ...user, ...action.payload.data };
          }
          return user;
        })
      };
    case Types.DELETE_USER:
      return {
        ...state,
        data: state.data.filter((user) => user.id !== action.payload)
      };
    default:
      return state;
  }
}

export const selectUsers = (state) => state.users.data;
export const selectUser = (id) => (state) => state.users.data?.find((user) => user.id === id);

export default users;
