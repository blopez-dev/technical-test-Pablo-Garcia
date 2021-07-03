import { tokenName } from 'application/config/variables';
import Types from '../actions/types';

const token = localStorage.getItem(tokenName);

const initialState = token
  ? { logged: true, token }
  : { logged: false, token: '' };

function auth(state = initialState, action) {
  switch (action.type) {
    case Types.LOGIN:
      return { token: action.payload, logged: true };
    case Types.LOGOUT:
      return initialState;
    default:
      return state;
  }
}
export const selectLoggedState = (state) => state.auth.logged;

export default auth;
