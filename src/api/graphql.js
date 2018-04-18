import { request, send } from '../utils/request';

export default data => send(request.post('/api/graphql'), data);
