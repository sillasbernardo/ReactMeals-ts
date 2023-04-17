import React from "react";
import { FaShoppingCart } from "react-icons/fa"

import "./Cart.css";

const Cart = () => {
  return (
    <div className="cart">
      <FaShoppingCart />
      <span>Your Cart</span>
      <span>0</span>
    </div>
  )
}

export default Cart;