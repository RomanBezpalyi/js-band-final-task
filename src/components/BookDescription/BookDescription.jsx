import React from 'react';
import PropTypes from 'prop-types';

const BookDescription = ({
  cover,
  title,
  author,
  level,
  tags,
  description,
}) => (
  <section>
    <div>
      <img alt="book cover" src={cover} />
      <h2>{title}</h2>
      <p>Author: {author}</p>
      <p>Level: {level}</p>
      <p>
        Tags:{' '}
        {tags.map(tag => (
          <span key={tag}>{tag} </span>
        ))}
      </p>
    </div>
    <p>{description}</p>
  </section>
);

BookDescription.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  description: PropTypes.string.isRequired,
};

export default BookDescription;
