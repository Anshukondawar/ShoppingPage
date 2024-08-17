import React from 'react';
import './ProductCard.css';
import './CartPage.css'

const ProductCard = ({ product, addToCart }) => {
    return (
      <div className="product-card" data-id={product.id}>
        <div className='image'>
        <img src={product.image} alt={product.name} />
        </div>
        <div className='body'>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>&#8377; {product.price.toFixed(2)}</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      </div>
    );
  };
  export default ProductCard;
