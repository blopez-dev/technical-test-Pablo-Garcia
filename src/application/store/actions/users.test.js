import { deleteUser, loadUsers, updateUser } from './users';
import createStore from '../index';

const store = createStore();

const promisify = (value) => () => new Promise((resolve) => resolve(value));

jest.mock('common/services/users', () => {
  const user = {
    first_name: 'George',
    last_name: 'Bluth',
    email: 'george.bluth@reqres.in'
  };
  const createUser = (values = {}) => ({ ...user, ...values });
  const data = [createUser({ id: '1' }), createUser({ id: '2' })];
  return {
    getUsers: promisify({ data: { data } })
  };
});

describe('Actions - Users', () => {
  it('should fetch and save the users in to the store', async () => {
    await store.dispatch(loadUsers());
    const { users } = store.getState();
    expect(users.data.length).toBe(2);
  });
  it('should update a specific user', () => {
    store.dispatch(updateUser('1', { first_name: 'Joan' }));
    const { users } = store.getState();
    const updatedUser = users.data.find((user) => user.id === '1');
    expect(updatedUser.first_name).toBe('Joan');
  });
  it('should delete a specific user', () => {
    store.dispatch(deleteUser('1'));
    const { users } = store.getState();
    const deletedUser = users.data.find((user) => user.id === '1');
    expect(deletedUser).toBeFalsy();
  });
});
