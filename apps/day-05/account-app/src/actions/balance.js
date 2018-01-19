import * as ActionTypes from './index';

export const setBalance = balance => {
  return {
    type: ActionTypes.SET_BALANCE,
    balance
  };
};

export const deposit = amount => {
  return {
    type: ActionTypes.DEPOSIT,
    amount
  };
};

export const withdraw = amount => {
  return {
    type: ActionTypes.WITHDRAW,
    amount
  };
};
