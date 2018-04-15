import { request, send } from '../utils/request';

// eslint-disable-next-line import/prefer-default-export
export const get = () => send(request.get('/api/schools'));
