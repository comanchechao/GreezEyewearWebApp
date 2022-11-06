import { configureStore } from "@reduxjs/toolkit";
import {
  colorReducer,
  sizeReducer,
  glassTypeReducer,
} from "./shop/orderDetail";

export default configureStore({
  reducer: {
    size: sizeReducer,
    color: colorReducer,
    glassType: glassTypeReducer,
  },
});
