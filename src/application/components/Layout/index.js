import React from 'react';
import { useLocation, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectLoggedState } from 'application/store/reducers/auth';
import PrivateLayout from './PrivateLayout';

const Layout = ({ children }) => {
  const logged = useSelector(selectLoggedState);
  const location = useLocation();

  const isLoginPage = () => location.pathname === '/login';
  const handlePrivateRoutes = () => (isLoginPage() ? (
    <Redirect to="/" />
  ) : (
    <PrivateLayout>{children}</PrivateLayout>
  ));
  const handlePublicRoutes = () => (!isLoginPage() ? <Redirect to="/login" /> : children);

  return logged ? handlePrivateRoutes() : handlePublicRoutes();
};

export default Layout;
