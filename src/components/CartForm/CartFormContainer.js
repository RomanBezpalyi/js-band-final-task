import { connect } from 'react-redux';
import { addBookToCart } from '../../redux/cartList/actions';
import CartForm from './CartForm';

const mDTP = { addBookToCart };

export default connect(null, mDTP)(CartForm);
