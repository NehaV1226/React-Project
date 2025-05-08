import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const {
    cartItems,
    incrementItem,
    decrementItem,
    removeFromCart,
    clearCart,
  } = useCart();

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h2 className="text-center mb-4">Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item._id}
              className="d-flex align-items-center justify-content-between border-bottom py-3"
            >
              <img src={item.image} alt={item.title} width="100" />
              <div className="flex-grow-1 mx-3">
                <h5>{item.title}</h5>
                <p className="text-success">₹{item.price}</p>
              </div>
              <div className="d-flex align-items-center">
                <button className="btn btn-outline-secondary btn-sm" onClick={() => decrementItem(item._id)}>-</button>
                <span className="mx-2">{item.quantity}</span>
                <button className="btn btn-outline-secondary btn-sm" onClick={() => incrementItem(item._id)}>+</button>
              </div>
              <button className="btn btn-danger btn-sm ms-3" onClick={() => removeFromCart(item._id)}>Remove</button>
            </div>
          ))}
          <div className="text-end mt-5" style={{ height: "60px" }}>
            <h4>Total: ₹{total}</h4>
          </div>
          <button className="btn btn-outline-danger" onClick={clearCart}>
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;