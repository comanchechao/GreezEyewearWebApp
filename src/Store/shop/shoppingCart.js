import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const productInCart = state.cart.find(
        (item) => item.product.id === action.payload.product.id
      );
      if (productInCart) {
        productInCart.quantity++;
      } else {
        state.cart.push(action.payload);
      }
    },
  },
});

export const cartActions = cart.actions;
export const cartReducers = cart.reducer;
