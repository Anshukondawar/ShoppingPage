import React from 'react';


const AddToCart = (product) => {
    setCart(prevCart => [...prevCart, product]);
  
    const card = document.querySelector(`[data-id='${product.id}']`);
    if (card) {
      card.classList.add('added-to-cart');
      setTimeout(() => card.classList.remove('added-to-cart'), 200); // Remove animation class after animation
    }
  };

  export default AddToCart;