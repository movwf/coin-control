import { configureStore } from '@reduxjs/toolkit';
import coinReducer from '../features/coin/coinSlice';

export default configureStore({
  reducer: {
    coin: coinReducer,
  },
});
