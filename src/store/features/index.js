import { combineReducers } from 'redux';
import community from './communitySlice';
import adminCommunity from './adminCommunitySlice';

export const rootReducers = combineReducers({
  community,
  adminCommunity,
});
