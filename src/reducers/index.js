import { combineReducers } from 'redux';
import counterReducer from './counter';
import demoReducer from './demo';

export default combineReducers({
  count: counterReducer,
  demo: demoReducer
});
