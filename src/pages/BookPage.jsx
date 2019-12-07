import React from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { connect } from 'react-redux';
import BookDescription from '../components/BookDescription';
import CartForm from '../components/CartForm';
import { getBooks } from '../redux/books/selectors';

const BookPage = ({ books, match }) => {
  const bookData = books.find(book => book.id === match.params.id);
  const {
    title,
    author,
    cover,
    level,
    tags,
    description,
    count,
    price,
    id,
  } = bookData;
  return (
    <section>
      <BookDescription
        cover={cover}
        title={title}
        level={level}
        author={author}
        tags={tags}
        description={description}
      />
      <CartForm price={price} id={id} count={count} title={title} />
    </section>
  );
};

BookPage.defaultProps = {
  books: [],
};

BookPage.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      cover: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      level: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      description: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired,
  ),
  match: ReactRouterPropTypes.match.isRequired,
};

const mSTP = state => ({
  books: getBooks(state),
});

export default connect(mSTP)(BookPage);
