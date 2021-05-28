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
      if (action.payload.position == 1) {
        let temp = state.activeMarkets["market-1"];
        state.activeMarkets["market-1"] = action.payload.market;
        if (state.activeMarkets["market-2"] == action.payload.market) {
          state.activeMarkets["market-2"] = temp;
        }
      }
      if (action.payload.position == 2) {
        let temp = state.activeMarkets["market-2"];
        state.activeMarkets["market-2"] = action.payload.market;
        if (state.activeMarkets["market-1"] == action.payload.market) {
          state.activeMarkets["market-1"] = temp;
        }
      }

      // Update state data
      state.coins.forEach((coin) => {
        coin.prices[0].market = state.activeMarkets["market-1"];
        coin.prices[1].market = state.activeMarkets["market-2"];
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
