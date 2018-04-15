import { request, send } from '../utils/request';
import { getItem } from '../utils/storage';

export const login = credentials => request.post('/api/users/login').send(credentials);
export const getCurrentUser = () => send(request.get(`/api/users/${getItem('userId')}`));
