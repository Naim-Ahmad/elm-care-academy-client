import { toggleSlice } from "./features/toggleSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    toggleSlice: toggleSlice.reducer,
  },
});
export default store;
