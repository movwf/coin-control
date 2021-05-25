import { createSlice } from "@reduxjs/toolkit";

export const menuToggleSlice = createSlice({
  name: "theme",
  initialState: {
    "market-1": false,
    "market-2": false,
    "add-coin": false,
    settings: false,
  },
  reducers: {
    toggle: (state, action) => {
      state[action.payload.menu] = !state[action.payload.menu];
    },
  },
});

export const { toggle } = menuToggleSlice.actions;

export default menuToggleSlice.reducer;
