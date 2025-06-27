import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">Your Cart</h1>
      {cart.map((item, idx) => (
        <div key={idx} className="mb-2 border p-2 flex justify-between">
          <span>{item.name}</span>
          <span>${item.price}</span>
        </div>
      ))}
      <h2 className="mt-4 text-lg">Total: ${total}</h2>
      <Link
        to="/checkout"
        className="mt-2 inline-block bg-red-500 text-white px-4 py-2"
      >
        Proceed to Checkout
      </Link>
    </div>
  );
}