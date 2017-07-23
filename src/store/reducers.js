import { combineReducers } from 'redux';
import values from './values/reducer';

const rootReducer = combineReducers({
  values,
});

export default rootReducer;
