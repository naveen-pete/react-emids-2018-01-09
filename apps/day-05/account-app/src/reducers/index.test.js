import rootReducer from './index';

describe('rootReducer', () => {
  it('initializes the default state', () => {
    const expectedResult = { balance: 0, conversionRate: 0 };
    expect(rootReducer({}, {})).toEqual(expectedResult);
  });
});
