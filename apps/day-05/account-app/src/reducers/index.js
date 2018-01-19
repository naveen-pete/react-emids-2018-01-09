import { combineReducers } from 'redux';
import balance from './balance';
import conversionRate from './conversion-rate';

export default combineReducers({ balance, conversionRate });
