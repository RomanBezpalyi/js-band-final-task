import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
      price: 0,
      count: 0,
      totalPrice: 0,
    };
  }

  componentDidMount() {
    const { price } = this.props;
    this.setState({ price });
  }

  handleChange = ({ target: { value } }) => {
    const { price } = this.state;
    this.setState({ count: Number(value), totalPrice: price * Number(value) });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { count, totalPrice } = this.state;
    const { title, id, addBookToCart } = this.props;

    addBookToCart({ count, totalPrice, title, id });
  };

  render() {
    const { count: max } = this.props;
    const { count, price, totalPrice } = this.state;
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
