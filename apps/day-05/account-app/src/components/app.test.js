import React from 'react';
import { shallow } from 'enzyme';
import App from './app';

describe('App', () => {
  const app = shallow(<App />);

  it('renders properly', () => {
    expect(app).toMatchSnapshot();
  });

  it('contains a connected Account component', () => {
    expect(app.find('Connect(Account)').exists()).toBe(true);
  });

  it('contains a connected DollarBalance component', () => {
    expect(app.find('Connect(DollarBalance)').exists()).toBe(true);
  });
});
