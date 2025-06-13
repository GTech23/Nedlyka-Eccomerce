import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const stored = localStorage.getItem("cartItems");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Add item to cart (increase quantity if already exists by id)
  function addItemToCart(newItem) {
    setCartItems((prevItems) => {
      if (!newItem.id) {
        console.error("Product must have a unique id!");
        return prevItems;
      }
      const existingItem = prevItems.find((item) => item.id === newItem.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === newItem.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...newItem, quantity: 1 }];
      }
    });
  }

  function updateCartItem(id, quantity) {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  }

  function removeItemFromCart(id) {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  }

  // Add clearCart function
  function clearCart() {
    setCartItems([]);
    localStorage.removeItem("cartItems");
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItemToCart,
        updateCartItem,
        removeItemFromCart,
        clearCart, // <-- make clearCart available
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
