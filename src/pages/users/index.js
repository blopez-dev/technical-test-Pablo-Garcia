import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadUsers } from 'application/store/actions/users';
import { selectUsers } from 'application/store/reducers/users';
import Listing from '../../common/comoponents/Listing/Listing';
import UsersLayout from './styles';

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);

  const results = 10;
  useEffect(() => {
    dispatch(loadUsers(results));
  }, []);

  return (
    <UsersLayout>
      <Listing items={users} />
    </UsersLayout>
  );
};

export default Users;
