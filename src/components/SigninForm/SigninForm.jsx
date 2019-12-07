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
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={this.handleChange}
          placeholder="E-mail"
        />
        {/* {errors.email && touched.email && <div>{errors.email}</div>} */}
        <button type="submit">Sign in</button>
      </form>
    );
  }
}

export default SigninForm;
