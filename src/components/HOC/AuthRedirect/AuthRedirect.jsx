import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { isAuthentificated } from '../../../redux/session/selectors';
// import { clearErrorMsg } from '../../../redux/session/actions';

const AuthRedirect = BaseComponent => {
  class WithAuthRedirect extends Component {
    static propTypes = {
      authentificated: PropTypes.bool.isRequired,
      history: ReactRouterPropTypes.history.isRequired,
      location: ReactRouterPropTypes.location.isRequired,
      // clearError: PropTypes.func.isRequired,
    };

    componentDidMount() {
      const { authentificated, history, clearError } = this.props;
      // clearError();
      if (!authentificated) return;

      history.replace('/books');
    }

    componentDidUpdate(prevProps) {
      const { authentificated, location, history } = this.props;
      if (!authentificated) return;
      // if (prevProps.authentificated !== authentificated) {
      if (location.state && location.state.from) {
        history.replace(location.state.from);
      }

      history.replace('/books');
      // }
    }

    render() {
      return <BaseComponent {...this.props} />;
    }
  }

  const mSTP = state => ({ authentificated: isAuthentificated(state) });
  // const mDTP = {
  //   clearError: clearErrorMsg,
  // };
  return connect(mSTP)(WithAuthRedirect);
};

export default AuthRedirect;
