import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";
import {
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/11.9.0/firebase-firestore.js";

import { db } from "../firebase/Firebase";
function ProductList() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const productsCollection = collection(db, "products");
      const productSnapshot = await getDocs(productsCollection);
      const productList = productSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productList);
    } catch (err) {
      setError("Failed to load products. Please try again later.");
      console.error("Error fetching products:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <p className="text-gray-500 mt-30 text-center">Loading products...</p>
    );
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }
  return (
    <section className="mt-30">
      <h2 className="text-2xl font-semibold mb-6">Explore our Store</h2>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {/* PRODUCT CARD */}
        {products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              id={product.id}
              imageUrl={product.imageUrl}
              name={product.name}
              priceCents={product.price}
            />
          );
        })}
      </div>
    </section>
  );
}

export default ProductList;
