import { request, send } from '../utils/request';

export const getAll = () => send(request.get('/api/users'));
export const getById = id => send(request.get(`/api/users/${id}`));
export const create = data => send(request.post('/api/users'), data);
