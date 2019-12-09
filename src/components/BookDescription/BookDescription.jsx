import React from 'react';
import PropTypes from 'prop-types';
import BackButton from '../BackButton';

const BookDescription = ({
  cover,
  title,
  author,
  level,
  tags,
  description,
}) => (
  <section className="thumbnail book-description-section">
    <div className="book-description-wrapper">
      <img alt="book cover" src={cover} className="img-thumbnail book-cover" />
      <div className="description-text-wrapper">
        <h2 className="book-title">{title}</h2>
        <p>
          <strong>Author:</strong> {author}
        </p>
        <p>
          <strong>Level:</strong> {level}
        </p>
        <p>
          <strong>Tags: </strong>
          {tags.map(tag => (
            <span className="label label-default tag" key={tag}>
              {tag}
            </span>
          ))}
        </p>
      </div>
    </div>
    <p className="description">{description}</p>
    <BackButton />
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
