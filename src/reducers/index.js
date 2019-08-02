import { clickReducer } from './clickReducer';
import { otherReducer } from './OtherReducer';
import { combineReducer } from 'redux';

export const Reducers = combineReducers ({
  clickState: clickReducer,
  otherState: otherReducer
});
