import * as request from './requester';

const baseUrl = 'http://localhost:3030/users';

export const Login = (loginData) => request.post(`${baseUrl}/login`, loginData);