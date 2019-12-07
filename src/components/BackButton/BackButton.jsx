import React from 'react';
import { Link } from 'react-router-dom';

const BackButton = () => (
  <Link to="/books">
    <button type="button">Back to Booklist</button>
  </Link>
);

export default BackButton;
