import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { isAuthentificated } from '../../../redux/session/selectors';

const AuthRedirect = BaseComponent => {
  class WithAuthRedirect extends Component {
    static propTypes = {
      authentificated: PropTypes.bool.isRequired,
      history: ReactRouterPropTypes.history.isRequired,
      location: ReactRouterPropTypes.location.isRequired,
    };

    componentDidMount() {
      const { authentificated, history } = this.props;
      if (!authentificated) return;

      history.replace('/books');
    }

    componentDidUpdate() {
      const { authentificated, location, history } = this.props;
      if (!authentificated) return;
      if (location.state && location.state.from) {
        history.replace(location.state.from);
      }

      history.replace('/books');
    }

    render() {
      return <BaseComponent />;
    }
  }

  const mSTP = state => ({ authentificated: isAuthentificated(state) });

  return connect(mSTP)(WithAuthRedirect);
};

export default AuthRedirect;
