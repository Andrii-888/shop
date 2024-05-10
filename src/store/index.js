import logger from "redux-logger";
import { createWrapper } from "next-redux-wrapper";
import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slices/productsSliceReducer";
const store = configureStore({
  reducer: {
    products: productsSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
const makeStore = (context) => createStore(rootReducer, applyMiddleware(thunk));
export const wrapper = createWrapper(store);

// export default store;

// import { createStore, applyMiddleware, combineReducers } from "redux";
// import thunk from "redux-thunk";

// import applianceReducer from "./reducers/applinceReducer";

// const rootReducer = combineReducers({
//   appliances: applianceReducer,
// });

// The createStore function call should be directly invoked without being wrapped in an arrow function

