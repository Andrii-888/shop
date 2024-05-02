import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchProductsAsync = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products/");
      if (!response.ok) {
        throw new Error(`fell to fetch product`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return `${error}`;
    }
  }
);

export default fetchProductsAsync;
