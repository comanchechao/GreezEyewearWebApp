import { createSlice } from "@reduxjs/toolkit";

export const size = createSlice({
  name: "sizeSection",
  initialState: {
    size: "md",
  },
  reducers: {
    setSize: (state, action) => {
      state.size = action.payload;
    },
  },
});

export const sizeActions = size.actions;
export const sizeReducer = size.reducer;
