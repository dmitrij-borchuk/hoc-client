import { request } from '../utils/request';

// eslint-disable-next-line import/prefer-default-export
export const init = data => request.post('/api/init').send(data);
