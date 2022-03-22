import React from 'react';
import { Navbar } from '../index.js';
import './Cart.css';
import { Link } from 'react-router-dom';
import CartCard from './CartCard';

function Cart({
  cart,
  updateCart,
  emptyCart,
  removeFromCart,
  setIsOpen,
  products,
}) {
  const cartItems = cart.line_items;
  const isEmpty = !cartItems;

  if (isEmpty) {
    return (
      <div className="cart-page-loading">
        <div className="loading_dot dot_one"></div>
        <div className="loading_dot dot_two"></div>
        <div className="loading_dot dot_three"></div>
      </div>
    );
  }

  const confirmCheckout = () => {
    return (
      <div className="confirm-checkout-wrapper">
        <section>
          <div className="total-price">Subtotal:</div>
          <div className="price">{cart.subtotal.formatted_with_symbol}</div>
        </section>
        <Link to="/checkout">
          <button className="checkout-button">Checkout</button>
        </Link>
        <button onClick={emptyCart} className="empty-cart-button">
          Empty Cart
        </button>
      </div>
    );
  };

  const cartItemsSum = () => {
    let sum = 0;
    cartItems.forEach((item) => {
      sum += item.quantity;
    });
    return sum;
  };

  const isPlural = (itemAmount) => {
    if (itemAmount() > 1) {
      return 'items';
    }
    return 'item';
  };

  const emptyCartMessage = () => <h1>Add Items To Your Cart!</h1>;
  const populatedCart = () => (
    <section>
      <p>User's cart</p>
      <p>{`${cartItemsSum()} \u0020 ${isPlural(cartItemsSum)}`}</p>
    </section>
  );

  return (
    <div className="cart-page">
      <Navbar setIsOpen={setIsOpen} />
      <div className="cart-item-list">
        {cartItems.length === 0 && emptyCartMessage()}
        {cartItems.length > 0 && populatedCart()}
        <CartCard
          cart={cart}
          updateCart={updateCart}
          removeFromCart={removeFromCart}
          products={products}
        ></CartCard>
        {cartItems.length > 0 && confirmCheckout()}
      </div>
    </div>
  );
}

export default Cart;