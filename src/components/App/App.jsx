import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getToken } from '../../redux/session/selectors';
import { refreshUser } from '../../redux/session/operations';
import ProtectedComponent from '../HOC/ProtectedComponent';
import SigninPage from '../../pages/SigninPage';
import BooksPage from '../../pages/BooksPage';
import BookPage from '../../pages/BookPage';
import CartPage from '../../pages/CartPage';
import NotFoundPage from '../../pages/NotFoundPage';

class App extends Component {
  static propTypes = {
    token: PropTypes.string,
    handleRefreshUser: PropTypes.func.isRequired,
  };

  static defaultProps = {
    token: null,
  };

  componentDidMount() {
    const { token, handleRefreshUser } = this.props;
    if (token) handleRefreshUser();
  }

  render() {
    return (
      <Switch>
        <Redirect exact from="/" to="/signin" />
        <Route path="/signin" component={SigninPage} />
        <ProtectedComponent exact path="/books" component={BooksPage} />
        <ProtectedComponent path="/books/:id" component={BookPage} />
        <ProtectedComponent path="/cart" component={CartPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    );
  }
}

const mSTP = state => ({
  token: getToken(state),
});

const mDTP = {
  handleRefreshUser: refreshUser,
};

export default connect(mSTP, mDTP)(App);
