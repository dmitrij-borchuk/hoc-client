import { request, send } from '../utils/request';

// eslint-disable-next-line import/prefer-default-export
export const create = data => send(request.post('/api/venues'), data);
export const get = () => send(request.get('/api/venues'));
