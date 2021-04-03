import { createSlice } from "@reduxjs/toolkit";

export const coinSlice = createSlice({
  name: "coin",
  initialState: [
    {
      coinName: "BTC",
      coinId: "btc-tl",
      paribuPrice: "1",
      binancePrice: "1",
    },
    {
      coinName: "ETH",
      coinId: "eth-tl",
      paribuPrice: "1",
      binancePrice: "1",
    },
  ],
  reducers: {
    addCoin: (state, action) => {
      state.push({
        coinName: action.payload.coinName,
        coinId: action.payload.coinId,
        paribuPrice: action.payload.paribuPrice,
        binancePrice: action.payload.binancePrice,
        diff: action.payload.diff,
      });
    },
    updateParibuByCoinId: (state, action) => {
      const coinData = state.find(
        (coin) => coin.coinId === action.payload.coinId
      );

      if (coinData) {
        coinData.paribuPrice = action.payload.price;
      }
    },
    updateBinanceByCoinId: (state, action) => {
      const coinData = state.find(
        (coin) => coin.coinId === action.payload.coinId
      );

      if (coinData) {
        coinData.binancePrice = action.payload.price;
      }
    },
  },
});

export const {
  updateParibuByCoinId,
  updateBinanceByCoinId,
  addCoin,
} = coinSlice.actions;

export const getCoinData = (state) => state.coin;

export default coinSlice.reducer;
