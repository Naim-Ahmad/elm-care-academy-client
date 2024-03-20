import { apiSlice } from "./api/apiSlice";
import { toggleSlice } from "./features/toggleSlice";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    toggleSlice: toggleSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (defaultMiddleWare) =>
    defaultMiddleWare().concat([apiSlice.middleware]),
});
export default store;
