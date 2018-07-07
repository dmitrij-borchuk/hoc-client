import { request, send } from '../utils/request';

export const get = () => send(request.get('/api/groups'));
export const getById = id => send(request.get(`/api/groups/${id}`));
export const edit = data => send(request.put(`/api/groups/${data.id}`), data);
