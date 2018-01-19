import React from 'react';
import { shallow } from 'enzyme';
import { DollarBalance } from './dollar-balance';

describe('DollarBalance', () => {
  const mockGetConversionRate = jest.fn();
  const props = {
    balance: 0,
    conversionRate: 0,
    getConversionRate: mockGetConversionRate
  };
  let dollarBalance = shallow(<DollarBalance {...props} />);

  it('renders properly', () => {
    expect(dollarBalance).toMatchSnapshot();
  });

  it('dispatches the `getConversionRate()` method it receives from props', () => {
    expect(mockGetConversionRate).toHaveBeenCalled();
  });

  describe('when there are valid props', () => {
    beforeEach(() => {
      props.balance = 100;
      props.conversionRate = 10;

      dollarBalance = shallow(<DollarBalance {...props} />);
    });

    it('displays the correct balance in USD', () => {
      expect(dollarBalance.find('h3').text()).toEqual('In USD: 10');
    });
  });
});
