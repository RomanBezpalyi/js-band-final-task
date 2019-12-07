import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const BookListItem = ({ cover, title, author, price, id }) => (
  <section>
    <img alt="book cover" src={cover} />
    <h3>{title}</h3>
    <p>{author}</p>
    <div>
      <p>{price}$</p>
      <Link to={`/books/${id}`}>
        <button type="button">View</button>
      </Link>
    </div>
  </section>
);

BookListItem.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default BookListItem;
