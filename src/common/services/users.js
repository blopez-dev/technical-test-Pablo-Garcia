import http from './http';

export const getUsers = (results = 10) => http.get(`./users?per_page=${results}`);
