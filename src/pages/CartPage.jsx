import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CartTable from '../components/CartTable';
import { getCartList } from '../redux/cartList/selectors';
import { purchaseBooks } from '../redux/cartList/operations';

const CartPage = ({ books, handlePurchase }) => (
  <section>
    <button type="button" onClick={handlePurchase}>
      Purchase
    </button>
    {!books.length && (
      <div>
        <h2>Cart is empty...</h2>
      </div>
    )}
    <CartTable books={books} />
    {books.length && (
      <p>
        Total price: {books.reduce((sum, book) => sum + book.totalPrice, 0)}$
      </p>
    )}
  </section>
);

CartPage.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      totalPrice: PropTypes.number.isRequired,
    }).isRequired,
  ),
  handlePurchase: PropTypes.func.isRequired,
};

CartPage.defaultProps = {
  books: [],
};

const mSTP = state => ({
  books: getCartList(state),
});

const mDTP = { handlePurchase: purchaseBooks };

export default connect(mSTP, mDTP)(CartPage);
