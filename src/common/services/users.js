import http from './http';

const getUsers = (results) => http.get(`./users?per_page=${results}`);

export default getUsers;
