import { ActionTypes } from './actions';

const cartList = (state = [], { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_BOOK_TO_CART:
      return [...state, payload];
    default:
      return state;
  }
};

export default cartList;
