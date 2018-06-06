import { request, send } from '../utils/request';

// eslint-disable-next-line import/prefer-default-export
export const getById = id => send(request.get(`/api/users/${id}`));
export const create = data => send(request.post('/api/users'), data);
export const getAll = () => send(request.get('/api/users'));
