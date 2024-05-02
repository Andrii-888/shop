import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slices/productsSliceReducer";
const store = configureStore({
  reducer: {
    products: productsSlice,

  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
