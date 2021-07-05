import React from 'react';
import { render, screen, fireEvent } from 'common/test/test';
import Users from './index';

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

describe('Page - Users', () => {
  test('should display a list of users', async () => {
    render(<Users />);

    const [userName] = await screen.findAllByText('George');
    expect(userName).toBeInTheDocument();
  });
  test('should display the detail of selected user', async () => {
    render(<Users />);
    const [userViewButton] = await screen.findAllByTestId('user-view-button');
    fireEvent.click(userViewButton);
    const userName = await screen.getByDisplayValue('George');

    expect(userName).toBeInTheDocument();
  });
});
