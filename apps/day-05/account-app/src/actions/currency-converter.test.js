import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { GET_CONVERSION_RATE, API_URL } from './index';
import { getConversionRate } from './currency-converter';

const createMockStore = configureMockStore([thunk]);
const store = createMockStore({ conversionRate: 0 });
const mockResponse = { USD_INR: { val: 64.009003 } };

fetchMock.get(API_URL, mockResponse);

it('creates an async action to get currency conversion rate', () => {
  const expectedActions = [
    { type: GET_CONVERSION_RATE, payload: mockResponse }
  ];

  return store.dispatch(getConversionRate()).then(() => {
    expect(store.getActions()).toEqual(expectedActions);
  });
});
