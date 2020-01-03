import {combineReducers} from 'redux';
import customerReducer from './customer';
import userReducer from './user';

export default combineReducers({
  customers: customerReducer,
  user: userReducer
})
