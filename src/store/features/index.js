import { combineReducers } from 'redux';
import community from './communitySlice';

export const rootReducers = combineReducers({
  community,
});
