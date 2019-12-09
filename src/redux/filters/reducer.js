import { ActionTypes } from './actions';

const initialState = {
  title: '',
  price: 'Price',
};

const filters = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_SEARCH_QUERY:
      return { ...state, title: payload };
    case ActionTypes.SET_PRICE:
      return { ...state, price: payload };
    default:
      return state;
  }
};

export default filters;
