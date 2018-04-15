import superagent from 'superagent';
import { getItem } from '../utils/storage';

import { AUTHORIZATION_HEADER_NAME } from '../constants';

export function send(req, data) {
  const token = getItem('token');
  return req.set(AUTHORIZATION_HEADER_NAME, `${token}`).send(data);
}
export const request = superagent;
