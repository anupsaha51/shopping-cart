import React from "react";
import { Link } from "react-router-dom";
import products from "../data/products";

export default function Home() {
  return (
    <div className="p-4 grid grid-cols-3 gap-4">
      {products.map((product) => (
        <div key={product.id} className="border p-4">
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
          <h2>{product.name}</h2>
          <p>${product.price}</p>
          <Link to={`/product/${product.id}`} className="text-blue-500">View</Link>
        </div>
      ))}
    </div>
  );
}