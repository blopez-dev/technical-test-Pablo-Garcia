import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from 'application/store/actions/auth';
import { Heading, Container } from './style';

const Header = () => {
  const dispatch = useDispatch();
  const logout = () => dispatch(logoutUser());

  return (
    <Heading>
      <Container>
        <button onClick={logout} type="button">
          Logout
        </button>
      </Container>
    </Heading>
  );
};

export default Header;
