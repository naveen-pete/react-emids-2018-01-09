import * as ActionTypes from '../actions';
import balanceReducer from './balance';
import balanceReducer2 from './balance';

describe('balanceReducer', () => {
  describe('when initializing', () => {
    const balance = 10;

    it('sets a balance', () => {
      const action = {
        type: ActionTypes.SET_BALANCE,
        balance
      };

      expect(balanceReducer(undefined, action)).toEqual(balance);
    });

    describe('then re-initializing', () => {
      it('reads the balance from cookies', () => {
        expect(balanceReducer2(undefined, {})).toEqual(balance);
      });
    });
  });

  it('deposits into the balance', () => {
    const initialState = 5;
    const amount = 10;
    const action = {
      type: ActionTypes.DEPOSIT,
      amount
    };

    expect(balanceReducer(initialState, action)).toEqual(initialState + amount);
  });

  it('withdraws from the balance', () => {
    const initialState = 20;
    const amount = 10;
    const action = {
      type: ActionTypes.WITHDRAW,
      amount
    };

    expect(balanceReducer(initialState, action)).toEqual(initialState - amount);
  });
});
