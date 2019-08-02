import { clickReducer } from './clickReducer';
// import { otherReducer } from './OtherReducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers ({
  clickState: clickReducer,
  // otherState: otherReducer
});
