import { configureStore } from "@reduxjs/toolkit";
import { sizeReducer } from "./shop/orderDetail";

export default configureStore({
  reducer: {
    size: sizeReducer,
  },
});
