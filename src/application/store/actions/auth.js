import { tokenName } from 'application/config/variables';
import actionTypes from './types';

export function loginUser(token) {
  localStorage.setItem(tokenName, token);
  return {
    type: actionTypes.LOGIN,
    payload: token
  };
}
export function logoutUser() {
  localStorage.removeItem(tokenName);
  return {
    type: actionTypes.LOGOUT
  };
}
