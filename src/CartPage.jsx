
import React from 'react';
import './CartPage.css';
import { useLocation } from 'react-router-dom';

const CartPage = ({ cart, onQuantityChange, onRemoveItem }) => {
  
  const location = useLocation();
  const { itemCount } = location.state || { itemCount: 0 };
  
  
  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleIncrement = (product) => {
    const newQuantity = product.quantity + 1;
    onQuantityChange(product, newQuantity);
  };

  const handleDecrement = (product) => {
    const newQuantity = product.quantity > 1 ? product.quantity - 1 : 1;
    onQuantityChange(product, newQuantity);
  };

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      <div className='main'>
      <div className="cart-products">
        {cart.map((item) => (
          <div key={item.id} className="cart-product">
            <img src={item.image} alt={item.name} className="product-image" />
            <div className="product-details">
              <h2>{item.name}</h2>
              <p>&#8377;{item.price.toFixed(2)}</p>
              <div className="quantity-selector">
                <button onClick={() => handleDecrement(item)}>-</button>
                <input
                  value={item.quantity}
                  onChange={(e) => onQuantityChange(item, parseInt(e.target.value))}
                />
                <button onClick={() => handleIncrement(item)}>+</button>
             
              <button onClick={() => onRemoveItem(item)} className="remove-button">Remove</button>
            </div>
            </div>
          </div>
        ))}
      </div>
      <div className="cart">
        {/* <p>Subtotal: &#8377;{calculateSubtotal().toFixed(2)}</p> */}
        <div className="cart-summary">
            <h2>Price Details</h2>
            <div className="summary-item">
                <span>Subtotal ({itemCount} items):</span>
                <span>&#8377;{calculateSubtotal().toFixed(2)}</span>
            </div>
            <div className="summary-item">
                <span>Discount</span>
                <span className="discount">− ₹0</span>
            </div>
            <div className="summary-item">
                <span>Delivery Charges</span>
                <span className="free">Free</span>
            </div>
            <div className="summary-item total">
                <span>Total Amount</span>
                <span>&#8377;{calculateSubtotal().toFixed(2)}</span>
            </div>
            <div className="savings">
                You will save ₹0 on this order
            </div>
        </div>
        <div className='check-out'>
          <button>Place Order</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default CartPage;
