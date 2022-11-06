import { createSlice } from "@reduxjs/toolkit";

export const size = createSlice({
  name: "sizeSection",
  initialState: {
    size: "size",
  },
  reducers: {
    setSize: (state, action) => {
      state.size = action.payload;
    },
  },
});

export const color = createSlice({
  name: "colorSection",
  initialState: {
    color: "color",
  },
  reducers: {
    setColor: (state, action) => {
      state.color = action.payload;
    },
  },
});

export const colorActions = color.actions;
export const colorReducer = color.reducer;
export const sizeActions = size.actions;
export const sizeReducer = size.reducer;
