import { useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import coinReducer from "../features/Coin/coinSlice";
import themeReducer from "../features/UI/themeSlice";
import menutoggleReducer from "../features/UI/menuToggleSlice";

const store = configureStore({
  reducer: {
    coin: coinReducer,
    theme: themeReducer,
    menuToggle: menutoggleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
