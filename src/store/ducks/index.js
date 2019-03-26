import { combineReducers } from 'redux';

import users from './users';
import maps from './maps';

export default combineReducers({
  users,
  maps,
});
