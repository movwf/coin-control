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
  activeMarkets: {
    [market: string]: string;
  };
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
  activeMarkets: {
    "market-1": "paribu",
    "market-2": "binance",
  },
};

export const coinSlice = createSlice({
  name: "coin",
  initialState,
  reducers: {
    updateCoin: (state, action) => {
      // Select and change values of coin
      state.coins
        .filter((coin) => {
          return coin.code == action.payload.coin;
        })[0]
        .prices.filter((price) => {
          return price.market == action.payload.market;
        })[0].currentPrice = action.payload.price;
    },
    updateMarket: (state, action) => {
      // Update active markets state
      state.activeMarkets[
        action.payload.position == 1 ? "market-1" : "market-2"
      ] = action.payload.market;
      // Update state data
      state.coins.forEach((coin) => {
        if (action.payload.position == 1) {
          coin.prices[0].market = action.payload.market;
        }
        if (action.payload.position == 2) {
          coin.prices[1].market = action.payload.market;
        }
      });
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

export const { updateCoin, addCoin, changeInterval, updateMarket } =
  coinSlice.actions;

export default coinSlice.reducer;
