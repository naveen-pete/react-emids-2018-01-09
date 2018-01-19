import { GET_CONVERSION_RATE, API_URL } from './index';

export const getConversionRate = () => {
  return dispatch => {
    return fetch(API_URL)
      .then(response => response.json())
      .then(payload => dispatch({ type: GET_CONVERSION_RATE, payload }));
  };
};
