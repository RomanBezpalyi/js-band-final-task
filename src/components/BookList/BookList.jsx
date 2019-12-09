import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoaderSpinner from '../LoaderSpinner';
import BookListItem from '../BookListItem';

export default class BookList extends Component {
  static propTypes = {
    getBooks: PropTypes.func.isRequired,
    books: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        level: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        cover: PropTypes.string.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      }).isRequired,
    ),
    isLoading: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    books: [],
  };

  componentDidMount() {
    const { getBooks, books } = this.props;
    if (!books.length) getBooks();
  }

  render() {
    const screenWidth = document.documentElement.clientWidth;
    const width = screenWidth > 767 ? 300 : 80;
    const height = screenWidth > 767 ? 200 : 80;
    const { books, isLoading } = this.props;
    return (
      <>
        {isLoading && (
          <div className="loader-books">
            <LoaderSpinner width={width} height={height} />
          </div>
        )}
        <ul className="list-unstyled container book-list">
          {books.map(book => (
            <li key={book.id} className="col-xs-12 col-sm-6 col-md-4">
              <BookListItem {...book} />
            </li>
          ))}
        </ul>
      </>
    );
  }
}
