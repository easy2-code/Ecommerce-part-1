import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

// Load cart state from localStorage
const loadCartFromLocalStorage = () => {
  try {
    const serializedCart = localStorage.getItem("cart");
    return serializedCart ? JSON.parse(serializedCart) : { items: [] };
  } catch (error) {
    console.error("Could not load cart from localStorage:", error);
    return { items: [] };
  }
};

// Save cart state to localStorage
const saveCartToLocalStorage = (state) => {
  try {
    const serializedCart = JSON.stringify(state.cart);
    localStorage.setItem("cart", serializedCart);
  } catch (error) {
    console.error("Could not save cart to localStorage:", error);
  }
};

// Initialize Redux store with preloaded cart
const preloadedState = {
  cart: loadCartFromLocalStorage(),
};

// Create store
const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState,
});

// Subscribe to store changes and persist them
store.subscribe(() => {
  saveCartToLocalStorage(store.getState());
});

export default store;
