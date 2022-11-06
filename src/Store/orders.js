import { configureStore } from "@reduxjs/toolkit";
import {
  colorReducer,
  sizeReducer,
  glassTypeReducer,
  lensTypeReducer,
  lensReducer,
  lensWidthReducer,
} from "./shop/orderDetail";

export default configureStore({
  reducer: {
    size: sizeReducer,
    color: colorReducer,
    lensType: lensTypeReducer,
    glassType: glassTypeReducer,
    lensDetail: lensReducer,
    lensWidth: lensWidthReducer,
  },
});
