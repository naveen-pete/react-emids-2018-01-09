import { GET_CONVERSION_RATE } from '../actions';

const conversionRate = (state = 0, action) => {
  switch (action.type) {
    case GET_CONVERSION_RATE:
      return action.payload.USD_INR.val;

    default:
      return state;
  }
};

export default conversionRate;
