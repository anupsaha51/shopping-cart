import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();
  return (
    <nav className="p-4 bg-blue-600 text-white flex justify-between">
      <Link to="/">Simple Shopping Cart App</Link>
      <Link to="/cart">Cart ({cart.length})</Link>
    </nav>
  );
}