import http from './http';

const login = (email, password) => http.post('./login', { email, password });

export default login;
