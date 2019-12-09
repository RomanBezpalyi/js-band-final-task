import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SigninForm extends Component {
  static propTypes = {
    onSignin: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };
  }

  componentDidMount() {
    document.body.addEventListener('keydown', this.handleEnterSubmit);
  }

  componentWillUnmount() {
    document.body.removeEventListener('keydown', this.handleEnterSubmit);
  }

  handleEnterSubmit = ({ code }) => {
    if (code === 'Enter' || code === 'NumpadEnter') this.handleSubmit();
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onSignin } = this.props;
    const { username } = this.state;
    onSignin({ username });
  };

  handleChange = ({ target: { value } }) => this.setState({ username: value });

  render() {
    const { username } = this.state;
    // const { errorMessage, errors, touched } = this.props;

    return (
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
        {/* {errors.email && touched.email && <div>{errors.email}</div>} */}
        <button className="btn base-btn signin-form-btn" type="submit">
          Sign-In
        </button>
      </form>
    );
  }
}

export default SigninForm;
