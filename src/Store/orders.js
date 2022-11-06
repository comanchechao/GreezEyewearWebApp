import { configureStore } from "@reduxjs/toolkit";
import { colorReducer, sizeReducer } from "./shop/orderDetail";

export default configureStore({
  reducer: {
    size: sizeReducer,
    color: colorReducer,
  },
});
