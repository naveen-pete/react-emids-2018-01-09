import * as ActionTypes from './index';
import * as Actions from './balance';

it('creates an action to set the balance', () => {
  const balance = 0;
  const expectedAction = { type: ActionTypes.SET_BALANCE, balance };

  expect(Actions.setBalance(balance)).toEqual(expectedAction);
});

it('creates an action to deposit into the balance', () => {
  const amount = 0;
  const expectedAction = { type: ActionTypes.DEPOSIT, amount };

  expect(Actions.deposit(amount)).toEqual(expectedAction);
});

it('creates an action to withdraw from the balance', () => {
  const amount = 0;
  const expectedAction = { type: ActionTypes.WITHDRAW, amount };

  expect(Actions.withdraw(amount)).toEqual(expectedAction);
});
