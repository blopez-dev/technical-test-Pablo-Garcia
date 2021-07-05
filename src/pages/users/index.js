import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadUsers } from 'application/store/actions/users';
import { selectUsers } from 'application/store/reducers/users';
import Listing from '../../common/comoponents/Listing/Listing';
import Pane from '../../common/comoponents/Pane';
import UserDetail from './components/UserDetail/index';
import UsersLayout from './styles';

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);

  const [activeUser, setActiveUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const closePane = () => setIsOpen(false);

  const onUserView = (user) => {
    setActiveUser(user);
    setIsOpen(!isOpen);
  };

  const results = 12;
  useEffect(() => {
    dispatch(loadUsers(results));
  }, []);

  return (
    <UsersLayout>
      <Listing items={users} onView={onUserView} />
      <Pane
        isOpen={isOpen}
        data={activeUser}
        onRequestClose={closePane}
        title={`${activeUser?.first_name} ${activeUser?.last_name}`}
      >
        <UserDetail id={activeUser?.id} onRemove={closePane} />
      </Pane>
    </UsersLayout>
  );
};

export default Users;
