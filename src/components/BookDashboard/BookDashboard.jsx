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
    const screenWidth = document.documentElement.clientWidth;
    const width = screenWidth > 767 ? 300 : 80;
    const height = screenWidth > 767 ? 200 : 80;
    return (
      <section className="book-page-section">
        {isLoading && (
          <div className="loader-books">
            <LoaderSpinner width={width} height={height} />
          </div>
        )}
        <BookDescription />
        <CartForm />
      </section>
    );
  }
}
