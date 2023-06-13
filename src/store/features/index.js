import { combineReducers } from 'redux';
import auth from './authSlice';

export const rootReducers = combineReducers({
  auth,
});
