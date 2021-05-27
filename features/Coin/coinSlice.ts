import { createSlice } from "@reduxjs/toolkit";
import { Coins } from "../../app/coins";
import { Markets } from "../../app/markets";
import { saveStorage } from "../../services/localStorage";

interface ICoin {
  coins: {
    name: string;
    code: string;
    prices: {
      market: string;
      currentPrice: number;
    }[];
  }[];
  interval: number;
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
  interval: 1000,
};

export const coinSlice = createSlice({
  name: "coin",
  initialState,
  reducers: {
    updateCoin: (state, action) => {
      state.coins
        .filter((coin) => {
          return coin.code == action.payload.coin;
        })[0]
        .prices.filter((price) => {
          return price.market == action.payload.market;
        })[0].currentPrice = action.payload.price;
    },
    addCoin: (state, action) => {
      state.coins.push({
        name: action.payload.name,
        code: action.payload.code,
        prices: Markets.map((market) => {
          return { market: market.name, currentPrice: 0 };
        }),
      });
      saveStorage("coin-data", action.payload.code);
    },
    changeInterval: (state, action) => {
      state.interval = action.payload.interval;
    },
  },
});

export const { updateCoin, addCoin, changeInterval } = coinSlice.actions;

export default coinSlice.reducer;
