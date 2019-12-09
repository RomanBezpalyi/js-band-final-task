import { connect } from 'react-redux';
import { getBooks } from '../../redux/books/selectors';
import { getTitle, getPrice } from '../../redux/filters/selectors';
import { getGetBooksLoading } from '../../redux/loadings/selectors';
import { getBooks as getBooksOperation } from '../../redux/books/operations';
import filterBooks from '../../helpers/filterBooks';
import BookList from './BookList';

const mSTP = state => ({
  books: filterBooks(getBooks(state), getTitle(state), getPrice(state)),
  isLoading: getGetBooksLoading(state),
});

const mDTP = dispatch => ({
  getBooks: () => dispatch(getBooksOperation()),
});

export default connect(mSTP, mDTP)(BookList);
