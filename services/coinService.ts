import axios from "axios";
import { Markets } from "../app/markets";

// TODO: Settings Slice, interval, market1, market2, selectedCoinList
// import interval setting default:1000
let interval = 1000;
// Market list
let marketQue = [];
// Request interval
let timeOutRef;

// Add market to que
export const addMarketToQue = (market1, market2) => {
  marketQue.push(
    Markets.filter((market) => {
      return market.name == market1;
    })
  );
  marketQue.push(
    Markets.filter((market) => {
      return market.name == market2;
    })
  );
};

// Coin data fetcher for each coin and 2 market
export const fetchCoinData = async (selectedCoinList: string[]) => {
  // Request queue
  let reqQue = [];

  // Add request for each coin/market
  marketQue.forEach((market) => {
    reqQue.push({
      name: market[0].name,
      api: market[0].api,
      coins: selectedCoinList.map((coin) => {
        return market.filter((marketInfo) => {
          return marketInfo.name == market[0].name;
        })[0].coins[coin];
      }),
    });
  });

  let reqList = [];
  // Create request for each market
  reqQue.forEach((req) => {
    req.coins.forEach((coin) => {
      reqList.push(axios.get(req.api + coin));
    });
  });

  let resList = [];
  await axios.all(reqList).then(
    axios.spread((...responses) => {
      resList.push(...responses);
    })
  );

  return resList;
};

// Change market for data
export const changeMarket = (market: string, position: number) => {
  // If market 1
  if (position == 1) {
    marketQue[0] = Markets.filter((m) => {
      return m.name == market;
    });
  }
  // If market 2
  if (position == 2) {
    marketQue[0] = Markets.filter((m) => {
      return m.name == market;
    });
  }
};

// Add new coin for fetching

// Start service
export const startCoinService = (
  selectedCoinList: string[],
  market1: string,
  market2: string
) => {
  addMarketToQue(market1, market2);

  timeOutRef = setInterval(() => {
    fetchCoinData(selectedCoinList);
  }, interval);
};

// Restart service for adding new coin or changing the market
export const restartCoinService = (selectedCoinList: string[]) => {
  clearInterval(timeOutRef);
  timeOutRef = setInterval(() => {
    fetchCoinData(selectedCoinList);
  }, interval);
};
