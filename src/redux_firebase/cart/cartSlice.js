import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  cartItem: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.cart = action.payload;
    },
    addToCart: (state, action) => {
      const item = action.payload.itemName;
      const exist = state.cartItem.some((a) => a.itemName === item);

      if (exist) {
      } else {
        state.cartItem.push({ ...action.payload });
      }
    },
    removeFromCart: (state, action) => {
      state.cartItem.splice(action.payload, 1);
    },
    emptyCart: (state) => {
      state.cartItem = [];
    },
  },
});

export const { setCart, addToCart, removeFromCart, emptyCart } =
  cartSlice.actions;

export default cartSlice.reducer;
