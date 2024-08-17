import React from 'react';
import './CartIcon.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import CartPage from './CartPage';

const CartIcon = ({ cart }) => {
  const navigate = useNavigate(); // Hook to enable navigation
  const itemCount = cart.length;

  // Handle the click event to navigate to the cart page
  const handleClick = () => {
    navigate('/cart',{ state: { itemCount } });
  };

  return (
    <div className="cart-icon" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <span><FontAwesomeIcon icon={faCartShopping} size="2x" /></span>
      {itemCount > 0 && <div className="cart-count">{itemCount}</div>}
     
    </div>
  );
};

export default CartIcon;
