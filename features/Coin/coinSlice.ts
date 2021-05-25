import { createSlice } from "@reduxjs/toolkit";
import { Coins } from "../../app/coins";
import { Markets } from "../../app/markets";

interface ICoin {
  coins: {
    name: string;
    code: string;
    prices: {
      market: string;
      currentPrice: number;
    }[];
  }[];
}

const initialState: ICoin = {
  coins: Coins.map((coin) => {
    return {
      name: coin.toUpperCase(),
      code: coin,
      prices: Markets.map((market) => {
        return {
          market: market.name,
          currentPrice: 0,
        };
      }),
    };
  }),
};

export const coinSlice = createSlice({
  name: "coin",
  initialState,
  reducers: {
    updateCoin: (state, action) => {
      state.coins
        .filter((coin) => {
          return coin.name == action.payload.coin;
        })[0]
        .prices.filter((price) => {
          return price.market == action.payload.market;
        })[0].currentPrice = 1;
    },
    addCoin: (state, action) => {
      state.coins.push({
        name: "test",
        code: "test",
        prices: [{ market: "test", currentPrice: 0 }],
      });
    },
  },
});

export const { updateCoin } = coinSlice.actions;

export default coinSlice.reducer;
