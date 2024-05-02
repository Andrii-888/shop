import { createSlice } from "@reduxjs/toolkit";
import fetchProductsAsync from "./fetchProductsSliceAsync";
import build from "next/dist/build";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: {},
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProductsAsync.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    build.addCase(fetchProductsAsync.fulfilled, (state, action) => {
      state.loading = false;
      const products = action.payload.reduce((acc, curent) => {
        acc[curent.id] = curent;
        return acc;
      });
      state.products = products;
    });
    build.addCase(fetchProductsAsync.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default productsSlice;
