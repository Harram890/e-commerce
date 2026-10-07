import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.scss";

const Cart = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

 
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(saved);
  }, []);

 
  const saveCart = (updated) => {
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };


  const handleAdd = (name) => {
    const updated = cart.map((item) =>
      item.name === name
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    saveCart(updated);
  };

 
  const handleRemove = (name) => {
    const updated = cart.filter((item) => item.name !== name);
    saveCart(updated);
  };


  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

 
  const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);

 
  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <div className="empty-cart">
          <span>🛒</span>
          <h2>Cart khali hai</h2>
          <p>Kuch products add karein</p>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-header">
        <h1>🛍️ Your Cart</h1>
        <span className="cart-badge">
          {totalQty} item{totalQty !== 1 ? "s" : ""}
        </span>
      </div>

      <div className="cart-list">
        {cart.map((item, index) => (
          <div key={index} className="cart-item">
           
            <img src={item.image} alt={item.name} className="cart-img" />

            <div className="item-info">
              <h3>{item.name}</h3>
              <p className="item-price">
                Price: ${item.price.toLocaleString()}
              </p>
              <p className="item-qty">Qty: {item.quantity}</p>
            </div>

            <div className="item-actions">
              {/* ➕ ADD button */}
              <button
                className="btn-add"
                onClick={() => handleAdd(item.name)}
              >
                Add
              </button>

           
              <button
                className="btn-remove"
                onClick={() => handleRemove(item.name)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

    
      <div className="cart-footer">
        <div className="total-row">
          <span>Total:</span>
          <span className="total-price">${total.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

export default Cart;