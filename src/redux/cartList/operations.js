import { toast } from 'react-toastify';
import * as api from '../../services/books-api';
import {
  purchaseBooksRequest,
  purchaseBooksSuccesss,
  purchaseBooksError,
} from './actions';
import { getToken } from '../session/selectors';
import { getCartList } from './selectors';

// eslint-disable-next-line import/prefer-default-export
export const purchaseBooks = () => (dispatch, getState) => {
  const token = getToken(getState());
  const cartList = getCartList(getState());
  const books = cartList.map(book => book.id);

  if (!token) return;
  dispatch(purchaseBooksRequest());
  api
    .purchaseBooks(token, { books })
    .then(response => {
      dispatch(purchaseBooksSuccesss(response));
      toast.success(`${response.data.message}`);
    })
    .catch(error => dispatch(purchaseBooksError(error.message)));
};
