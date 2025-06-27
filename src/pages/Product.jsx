import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/CartContext";

export default function Product() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { dispatch } = useCart();

  const [added, setAdded] = React.useState(false);

  const handleAddToCart = () => {
    dispatch({ type: "ADD_TO_CART", product });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="p-4">
      <img src={product.image} alt={product.name} className="w-64 h-64 object-cover" />
      <h1>{product.name}</h1>
      <p>${product.price}</p>
      <button
        onClick={handleAddToCart}
        className="mt-2 bg-green-500 px-4 py-2 text-white"
      >
        Add to Cart
      </button>
      {added && (
        <div className="mt-2 text-green-700">Item added to cart!</div>
      )}
    </div>
  );
}