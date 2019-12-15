import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import LoaderSpinner from '../LoaderSpinner';
import BookDescription from '../BookDescription';
import CartForm from '../CartForm';

export default class BookDashboard extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    getBook: PropTypes.func.isRequired,
    removeSelectedBookFromStore: PropTypes.func.isRequired,
    match: ReactRouterPropTypes.match.isRequired,
  };

  componentDidMount() {
    const { getBook, match } = this.props;
    const { id } = match.params;
    getBook(id);
  }

  componentWillUnmount() {
    const { removeSelectedBookFromStore } = this.props;
    removeSelectedBookFromStore();
  }

  render() {
    const { isLoading } = this.props;
    return (
      <section className="book-page-section">
        {isLoading && <LoaderSpinner className="loader-book" />}
        <BookDescription />
        <CartForm />
      </section>
    );
  }
}
