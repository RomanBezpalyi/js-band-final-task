export const ActionTypes = {
  ADD_BOOK_TO_CART: 'ADD_BOOK_TO_CART',

  PURCHASE_BOOKS_REQUEST: 'PURCHASE_BOOKS_REQUEST',
  PURCHASE_BOOKS_SUCCESS: 'PURCHASE_BOOKS_SUCCESS',
  PURCHASE_BOOKS_ERROR: 'PURCHASE_BOOKS_ERROR',

  CLEAR_PURCHASE_BOOK_ERROR: 'CLEAR_PURCHASE_BOOK_ERROR',
};

export const addBookToCart = book => ({
  type: ActionTypes.ADD_BOOK_TO_CART,
  payload: book,
});

export const getBooksRequest = () => ({
  type: ActionTypes.GET_BOOKS_REQUEST,
});

export const getBooksSuccesss = response => ({
  type: ActionTypes.GET_BOOKS_SUCCESS,
  payload: { response },
});
