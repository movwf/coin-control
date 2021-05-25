import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    value: "",
  },
  reducers: {
    changeTheme: (state) => {
      state.value = state.value == "dark" ? "":"";
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
