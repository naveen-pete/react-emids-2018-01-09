import { read_cookie, bake_cookie } from 'sfcookies';

import * as ActionTypes from '../actions';

const BALANCE_COOKIE = 'BALANCE_COOKIE';

const balance = (state = 0, action) => {
  let balance;

  switch (action.type) {
    case ActionTypes.SET_BALANCE:
      balance = action.balance;
      break;

    case ActionTypes.DEPOSIT:
      balance = state + action.amount;
      break;

    case ActionTypes.WITHDRAW:
      balance = state - action.amount;
      break;

    default:
      balance = parseInt(read_cookie(BALANCE_COOKIE), 10) || state;
  }

  bake_cookie(BALANCE_COOKIE, balance);

  return balance;
};

export default balance;
