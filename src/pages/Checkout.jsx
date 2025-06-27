import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Checkout() {
  const navigate = useNavigate();
  const { cart, dispatch } = useCart();
  const [form, setForm] = useState({
    name: "",
    address: "",
    email: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.address || !form.email) {
      alert("Please fill all fields");
      return;
    }
    console.log("Order submitted:", { ...form, cart });
    dispatch({ type: "CLEAR_CART" });
    alert("Order placed successfully!");
    navigate("/");
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-2xl mb-4">Checkout</h1>
      <h2 className="text-lg mb-4">Order Total: ${total}</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="border p-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          className="border p-2"
        />
        <textarea
          name="address"
          placeholder="Shipping Address"
          value={form.address}
          onChange={handleChange}
          className="border p-2"
        />
        <button
          type="submit"
          className="bg-green-600 text-white py-2 px-4"
        >
          Place Order
        </button>
      </form>
    </div>
  );
}