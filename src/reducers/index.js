import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import app from './app';
import auth from './auth';
import loader from './loader';
import schools from './schools';
import users from './users';
import groups from './groups';
import pages from './pages';

export default combineReducers({
  app,
  auth,
  loader,
  schools,
  users,
  groups,
  pages,

  form: formReducer,
});
