import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoaderSpinner from '../LoaderSpinner';

class SigninForm extends Component {
  static propTypes = {
    onSignin: PropTypes.func.isRequired,
    error: PropTypes.string,
    isLoading: PropTypes.bool.isRequired,
    clearErrorMsg: PropTypes.func.isRequired,
    signInError: PropTypes.func.isRequired,
  };

  static defaultProps = {
    error: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const { error, clearErrorMsg } = this.props;
    const { username } = this.state;
    if (error && prevState.username !== username) {
      clearErrorMsg();
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    const { onSignin, signInError } = this.props;
    const { username } = this.state;
    if (username.length < 4 || username.length > 16) {
      signInError();
      return;
    }
    onSignin({ username });
  };

  handleChange = ({ target: { value } }) => this.setState({ username: value });

  render() {
    const { username } = this.state;
    const { error, isLoading } = this.props;

    return (
      <>
        {isLoading && (
          <div className="signin-loader">
            <LoaderSpinner />
          </div>
        )}
        <form onSubmit={this.handleSubmit} className="signin-form">
          <label htmlFor="username">
            Username
            <input
              type="text"
              id="username"
              value={username}
              onChange={this.handleChange}
              placeholder="Type username"
              className="form-control"
            />
          </label>
          {error && <div className="error-msg">Field is not valid.</div>}
          <button className="btn base-btn signin-form-btn" type="submit">
            Sign-In
          </button>
        </form>
      </>
    );
  }
}

export default SigninForm;
