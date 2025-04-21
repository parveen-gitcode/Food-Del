import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const Cart = () => {
  const {
    url,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    food_list,
    getTotalCartAmount,
  } = useContext(StoreContext);
  const navigate = useNavigate();  
  return (
    <div>
      
    </div>
  )
}

export default Cart
