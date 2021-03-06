import { getUsers } from 'common/services/users';
import actionTypes from './types';

export async function loadUsers(results) {
  const { data } = await getUsers(results);
  return {
    type: actionTypes.LOAD_USERS,
    payload: data
  };
}

export function updateUser(id, data) {
  return {
    type: actionTypes.UPDATE_USER,
    payload: { id, data }
  };
}

export function deleteUser(id) {
  return {
    type: actionTypes.DELETE_USER,
    payload: id
  };
}
