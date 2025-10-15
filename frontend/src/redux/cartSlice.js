// src/redux/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add item or increase quantity
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find((p) => p.name === item.name);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
    },

    // Remove one quantity
    removeItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find((p) => p.name === item.name);

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          state.items = state.items.filter((p) => p.name !== item.name);
        }
      }
    },

    // Delete entire product from cart
    deleteItem: (state, action) => {
      const item = action.payload;
      state.items = state.items.filter((p) => p.name !== item.name);
    },

    // Clear entire cart
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, deleteItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
