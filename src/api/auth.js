import { request } from '../utils/request';

// eslint-disable-next-line import/prefer-default-export
export const login = credentials => request.post('/api/users/login').send(credentials);
export const oAuthLogin = data => request.post('/api/users/oauth-login').send(data);
export const resetPassword = data => request.post('/api/users/reset').send(data);
