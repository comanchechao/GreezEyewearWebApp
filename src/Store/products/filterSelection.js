import { createSlice } from "@reduxjs/toolkit";

export const selectedFilters = createSlice({
  name: "selectedFilters",
  initialState: {
    brand: ["brand"],
    rim: ["rim"],
    shape: ["shape"],
    material: ["material"],
    gender: [],
    price: ["price"],
    size: ["size"],
  },
  reducers: {
    getProducts: async (state, action) => {
      try {
        const { data, error } = await supabase
          .from("Products")
          .select()
          .in("Gender", state.gender);
        if (error) throw error;
        console.log(data);
      } catch (error) {
        alert(error.message);
      }
    },
    setBrand: (state, action) => {
      state.brand.push(action.payload);
    },
    setSize: (state, action) => {
      state.size.push(action.payload);
    },
    setRim: (state, action) => {
      state.brand.push(action.payload);
    },
    setShape: (state, action) => {
      state.shape.push(action.payload);
    },
    setMaterial: (state, action) => {
      state.material.push(action.payload);
    },
    setGender: (state, action) => {
      state.gender.push(action.payload);
    },
    setPrice: (state, action) => {
      state.price.push(action.payload);
    },
  },
});

export const selectedFiltersActions = selectedFilters.actions;
export const selectedFiltersReducer = selectedFilters.reducer;
