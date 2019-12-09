import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
  };

  static defaultProps = {
    books: [],
  };

  componentDidMount() {
    const { getBooks, books } = this.props;
    if (!books.length) getBooks();
  }

  render() {
    const { books } = this.props;
    return (
      <ul className="list-unstyled container book-list">
        {books.map(book => (
          <li key={book.id} className="col-xs-12 col-sm-6 col-md-4">
            <BookListItem {...book} />
          </li>
        ))}
      </ul>
    );
  }
}
