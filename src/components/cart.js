import React from 'react';

const Cart = ({ cart, removeFromCart, updateQuantity }) => {
  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <img src={item.img} alt={item.name} width={40} />
            <span>{item.name}</span>
            <button onClick={() => updateQuantity(item.id, 'decrease')}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => updateQuantity(item.id, 'increase')}>+</button>
            <span>Rs. {item.Price * item.quantity}</span>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>
        Total: Rs.{' '}
        {cart
          .map((item) => item.Price * item.quantity)
          .reduce((total, value) => total + value, 0)}
      </p>
    </div>
  );
};

export default Cart;
