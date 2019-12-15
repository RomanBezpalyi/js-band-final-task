import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

export default class CartForm extends Component {
  static propTypes = {
    book: PropTypes.shape({
      price: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
    addBookToCart: PropTypes.func.isRequired,
  };

  static defaultProps = {
    book: null,
  };

  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      totalPrice: 0,
    };
  }

  handleChange = ({ target: { value } }) => {
    if (Number(value) < 0) return;
    const { price } = this.props.book;
    this.setState({ count: Number(value), totalPrice: price * Number(value) });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { count, totalPrice } = this.state;
    const { book, addBookToCart } = this.props;
    const { title, id } = book;

    addBookToCart({ count, totalPrice, title, id });
    toast.success('Books have been successfully added to cart.');
    this.setState({ count: 0, totalPrice: 0 });
  };

  render() {
    const { count, totalPrice } = this.state;
    const { book } = this.props;
    return (
      book && (
        <aside className="cart-aside">
          <h3 className="cart-aside__title">Order the book</h3>
          <form onSubmit={this.handleSubmit} className="cart-form">
            <div className="cart-form__wrapper">
              <p className="cart-form__subtitle">Price</p>
              <span>${book.price.toFixed(2)}</span>
            </div>
            <label htmlFor="count" className="cart-form__wrapper">
              Count
              <input
                id="count"
                type="number"
                className="form-control cart-form__input"
                value={count}
                min={0}
                max={book.count}
                onChange={this.handleChange}
              />
            </label>
            <div className="cart-form__wrapper">
              <p className="cart-form__subtitle">Total price</p>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <button
              type="submit"
              className="btn base-btn cart-form-btn"
              disabled={count <= 0 || count > book.count}
            >
              Add to cart
            </button>
          </form>
        </aside>
      )
    );
  }
}
