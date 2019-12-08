import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import BackButton from '../components/BackButton';
import CartTable from '../components/CartTable';
import { getCartList } from '../redux/cartList/selectors';
import { purchaseBooks } from '../redux/cartList/operations';

const CartPage = ({ books, handlePurchase }) => (
  <>
    <Header />
    <main className="main-content">
      <section>
        <BackButton />
        <button type="button" onClick={handlePurchase} disabled={!books.length}>
          Purchase
        </button>
        {!books.length && (
          <div>
            <h2>Cart is empty...</h2>
          </div>
        )}
        <CartTable books={books} />
        {books.length > 0 && (
          <p>
            Total price: {books.reduce((sum, book) => sum + book.totalPrice, 0)}
            $
          </p>
        )}
      </section>
    </main>
  </>
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
