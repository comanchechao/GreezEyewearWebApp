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
      if (state.brand.length > 8) {
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
      state.brand = action.payload;
    },
    removeBrand: (state, action) => {
      state.brand.splice(state.brand.indexOf(action.payload), 1);
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
    removeRim: (state, action) => {
      state.rim.splice(state.rim.indexOf(action.payload), 1);
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
    removeShape: (state, action) => {
      state.shape.splice(state.shape.indexOf(action.payload), 1);
    },
    setMaterial: (state, action) => {
      if (state.material.length > 8) {
        state.material = [];
        if (state.shape.indexOf(action.payload) === -1) {
          state.material.push(action.payload);
        } else {
          state.material.splice(state.material.indexOf(action.payload), 1);
        }
      } else {
        if (state.shape.indexOf(action.payload) === -1) {
          state.material.push(action.payload);
        } else {
          state.material.splice(state.material.indexOf(action.payload), 1);
        }
      }
    },
    getMaterials: (state, action) => {
      state.material = action.payload;
    },
    removeMaterial: (state, action) => {
      state.material.splice(state.material.indexOf(action.payload), 1);
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
    removeGender: (state, action) => {
      state.gender.splice(state.gender.indexOf(action.payload), 1);
    },
    setPrice: (state, action) => {
      state.price.push(action.payload);
    },
  },
});

export const selectedFiltersActions = selectedFilters.actions;
export const selectedFiltersReducer = selectedFilters.reducer;
