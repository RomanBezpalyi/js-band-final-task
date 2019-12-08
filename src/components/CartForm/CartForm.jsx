import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

export default class CartForm extends Component {
  static propTypes = {
    price: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    addBookToCart: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      totalPrice: 0,
    };
  }

  handleChange = ({ target: { value } }) => {
    console.log('typeof value', typeof value);
    const { price } = this.props;
    this.setState({ count: Number(value), totalPrice: price * Number(value) });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { count, totalPrice } = this.state;
    const { title, id, addBookToCart } = this.props;

    addBookToCart({ count, totalPrice, title, id });
    toast.success('Books have been successfully added to cart.');
    this.setState({ count: 0, totalPrice: 0 });
  };

  render() {
    const { count: max, price } = this.props;
    const { count, totalPrice } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <p>Price, $</p>
          <span>{price}</span>
        </div>
        <div>
          <label htmlFor="count">
            Count
            <input
              id="count"
              type="number"
              value={count}
              min={0}
              max={max}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div>
          <p>Total price</p>
          <span>${totalPrice}</span>
        </div>
        <button type="submit" disabled={!count || count > max}>
          Add to cart
        </button>
      </form>
    );
  }
}
