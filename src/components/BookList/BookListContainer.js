import { connect } from 'react-redux';
import { getBooks } from '../../redux/books/selectors';
import { getBooks as getBooksOperation } from '../../redux/books/operations';
import BookList from './BookList';

const mSTP = state => ({
  books: getBooks(state),
});

const mDTP = dispatch => ({
  getBooks: () => dispatch(getBooksOperation()),
});

export default connect(mSTP, mDTP)(BookList);
