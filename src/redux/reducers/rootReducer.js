import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import homeReducer from './homeReducer';

const rootReducer = combineReducers({ homeReducer, cartReducer });

export default rootReducer;
