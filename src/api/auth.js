import { request } from '../utils/request';

// eslint-disable-next-line import/prefer-default-export
export const login = credentials => request.post('/api/users/login').send(credentials);
