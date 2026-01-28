import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const updateStorage = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // ADD TO CART
  const addToCart = (product) => {
    const updatedCart = [...cart];
    const index = updatedCart.findIndex(item => item.id === product.id);

    if (index !== -1) {
      updatedCart[index].quantity += 1;
    } else {
      updatedCart.push({ ...product, quantity: 1 });
    }

    updateStorage(updatedCart);
  };

  // DECREASE QUANTITY (REMOVE IF 0)
  const decreaseQuantity = (id) => {
    const updatedCart = cart
      .map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter(item => item.quantity > 0); // remove item if quantity = 0

    updateStorage(updatedCart);
  };

  // REMOVE ITEM COMPLETELY
  const removeItem = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    updateStorage(updatedCart);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, decreaseQuantity, removeItem }}>
      {children}
    </CartContext.Provider>
  );
}
