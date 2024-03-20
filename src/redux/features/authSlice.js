const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
  isShowNav: false,
};

export const toggleSlice = createSlice({
  name: "toggleSlice",
  initialState,
  reducers: {
    toggleShowHideNav: (state, action) => {
      state.isShowNav = action.payload;
    },
  },
});

export const { toggleShowHideNav } = toggleSlice.actions;
