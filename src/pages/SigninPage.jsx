import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import Header from '../components/Header';
import SigninForm from '../components/SigninForm';

const SigninPage = ({ history, location }) => (
  <>
    <Header />
    <SigninForm history={history} location={location} />
  </>
);

SigninPage.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  location: ReactRouterPropTypes.location.isRequired,
};

export default SigninPage;
