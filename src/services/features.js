import { ROLES } from '../constants';

// eslint-disable-next-line import/prefer-default-export
export const getFeatures = roles => ({
  userManagement: roles.includes(ROLES.SYSTEM_ADMIN) || roles.includes(ROLES.ADMIN),
});
