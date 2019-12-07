import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { isAuthentificated } from '../../../redux/session/selectors';

const ProtectedComponent = ({
  component: Component,
  authentificated,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props =>
        authentificated ? <Component {...props} /> : <Redirect to="/signin" />
      }
    />
  );
};

ProtectedComponent.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  component: PropTypes.any.isRequired,
  authentificated: PropTypes.bool.isRequired,
};

const mSTP = state => ({
  authentificated: isAuthentificated(state),
});

export default connect(mSTP, null)(ProtectedComponent);
