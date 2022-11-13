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
      } catch (error) {
        alert(error.message);
      }
    },
    setBrand: (state, action) => {
      if (state.brand.length > 4) {
        state.brand = [];
        if (state.brand.indexOf(action.payload) === -1) {
          state.brand.push(action.payload);
        } else {
          state.brand.splice(state.brand.indexOf(action.payload), 1);
        }
      } else {
        if (state.brand.indexOf(action.payload) === -1) {
          state.brand.push(action.payload);
        } else {
          state.brand.splice(state.brand.indexOf(action.payload), 1);
        }
      }
    },
    getBrands: (state, action) => {
      console.log("logging action brands", action.payload);
      state.brand = action.payload;
    },
    setSize: (state, action) => {
      state.size.push(action.payload);
    },
    setRim: (state, action) => {
      if (state.rim.length > 2) {
        state.rim = [];
        if (state.rim.indexOf(action.payload) === -1) {
          state.rim.push(action.payload);
        } else {
          state.rim.splice(state.rim.indexOf(action.payload), 1);
        }
      } else {
        if (state.rim.indexOf(action.payload) === -1) {
          state.rim.push(action.payload);
        } else {
          state.rim.splice(state.rim.indexOf(action.payload), 1);
        }
      }
    },
    getRims: (state, action) => {
      state.rim = action.payload;
    },
    setShape: (state, action) => {
      if (state.shape.length > 6) {
        state.shape = [];
        if (state.shape.indexOf(action.payload) === -1) {
          state.shape.push(action.payload);
        } else {
          state.shape.splice(state.shape.indexOf(action.payload), 1);
        }
      } else {
        if (state.shape.indexOf(action.payload) === -1) {
          state.shape.push(action.payload);
        } else {
          state.shape.splice(state.shape.indexOf(action.payload), 1);
        }
      }
    },
    getShapes: (state, action) => {
      state.shape = action.payload;
    },
    setMaterial: (state, action) => {
      state.material.push(action.payload);
    },
    setGender: (state, action) => {
      if (state.gender.length > 3) {
        state.gender = [];
        state.gender.push(action.payload);
      } else {
        state.gender.push(action.payload);
      }
    },
    getGenders: (state, action) => {
      state.gender = action.payload;
    },
    setPrice: (state, action) => {
      state.price.push(action.payload);
    },
  },
});

export const selectedFiltersActions = selectedFilters.actions;
export const selectedFiltersReducer = selectedFilters.reducer;
