
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductCard from './ProductCard';
import CartIcon from './CartIcon';
import CartPage from './CartPage';
import './App.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('/Products.json')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  const AddToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const handleQuantityChange = (product, quantity) => {
    setCart(cart.map(item =>
      item.id === product.id
        ? { ...item, quantity }
        : item
    ));
  };

  const handleRemoveItem = (product) => {
    setCart(cart.filter(item => item.id !== product.id));
  };

  return (
    <Router>
      <div className="app">
        <CartIcon cart={cart} />
        <Routes>
          <Route
            path="/"
            element={
              <div className="product-grid">
                {products.map(product => (
                  <ProductCard key={product.id} product={product} addToCart={AddToCart} />
                ))}
              </div>
            }
          />
          <Route
            path="/cart"
            element={
              <CartPage
                cart={cart}
                onQuantityChange={handleQuantityChange}
                onRemoveItem={handleRemoveItem}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;



