import { createSlice } from "@reduxjs/toolkit";
import { getStorage, saveStorage } from "../../services/localStorage";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    value: "default",
  },
  reducers: {
    changeTheme: (state) => {
      state.value = state.value == "" ? "dark" : "";
      saveStorage("theme", state.value);
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
