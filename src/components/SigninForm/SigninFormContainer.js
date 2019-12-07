import { connect } from 'react-redux';
import { signin } from '../../redux/session/operations';
import SigninForm from './SigninForm';

const mDTP = dispatch => ({
  onSignin: username => dispatch(signin(username)),
});

export default connect(null, mDTP)(SigninForm);
