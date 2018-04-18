import { request, send } from '../utils/request';

export const getById = id => send(request.get(`/api/users/${id}`));
export const create = data => send(request.post('/api/users'), data);
