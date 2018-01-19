import React from 'react';
import { shallow } from 'enzyme';
import { Account } from './account';

describe('Account', () => {
  const mockDeposit = jest.fn();
  const mockWithdraw = jest.fn();
  const props = { balance: 20, deposit: mockDeposit, withdraw: mockWithdraw };
  const account = shallow(<Account {...props} />);

  it('renders properly', () => {
    expect(account).toMatchSnapshot();
  });

  it('displays the balance from the props', () => {
    expect(account.find('.balance').text()).toEqual(
      'Account Balance (INR): 20'
    );
  });

  it('creates an input to deposit into or withdraw from the balance', () => {
    expect(account.find('.input-amount').exists()).toBe(true);
  });

  describe('when the user types into the amount input', () => {
    const amount = '25';

    beforeEach(() => {
      account
        .find('.input-amount')
        .simulate('change', { target: { value: amount } });
    });

    it('updates the amount in `state` and converts it to a number', () => {
      expect(account.state().amount).toEqual(parseInt(amount, 10));
    });

    describe('and the user wants to make a deposit', () => {
      beforeEach(() => account.find('.btn-deposit').simulate('click'));

      it('dispatches the `deposit()` it receives from props with the amount', () => {
        expect(mockDeposit).toHaveBeenCalledWith(parseInt(amount, 10));
      });
    });

    describe('and the user wants to make a withdrawal', () => {
      beforeEach(() => account.find('.btn-withdraw').simulate('click'));

      it('dispatches the `withdraw()` it receives from props with the amount', () => {
        expect(mockWithdraw).toHaveBeenCalledWith(parseInt(amount, 10));
      });
    });
  });
});
