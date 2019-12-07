import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import SigninForm from '../components/SigninForm';

const SigninPage = ({ history, location }) => (
  <SigninForm history={history} location={location} />
);

SigninPage.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  location: ReactRouterPropTypes.location.isRequired,
};

export default SigninPage;
