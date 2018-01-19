import { GET_CONVERSION_RATE } from '../actions';
import conversionRateReducer from './conversion-rate';

describe('conversionRateReducer', () => {
  const payload = { USD_INR: { val: 64.009003 } };
  const action = { type: GET_CONVERSION_RATE, payload };

  it('fetches and sets the currency conversion rate', () => {
    expect(conversionRateReducer(undefined, action)).toEqual(
      action.payload.USD_INR.val
    );
  });
});
