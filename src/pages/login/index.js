import React from 'react';
import { useDispatch } from 'react-redux';
import login from 'common/services/login';
import { loginUser } from 'application/store/actions/auth';
import FormLogin from './styles';

const Login = () => {
  const dispatch = useDispatch();

  const onSubmit = async (e) => {
    e.preventDefault();
    const values = new FormData(e.target);
    const email = values.get('email');
    const password = values.get('password');
    const { data } = await login(email, password);
    dispatch(loginUser(data.token));
  };

  return (
    <FormLogin>
      <form onSubmit={onSubmit}>
        <input type="text" name="email" placeholder="Name" />
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Entrar</button>
      </form>
    </FormLogin>
  );
};

export default Login;
