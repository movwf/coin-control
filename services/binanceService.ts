import axios from "axios";
import { Markets } from "../app/markets";

const fetchBinanceData = async (coinList: string[]) => {
  // Local code for coins
  let coinCodeList = Markets.filter((market) => {
    return market.name == "binance";
  })[0].coins;
  // Request que based on coin
  let reqQue = [];
  coinList.forEach((coin) => {
    reqQue.push({ name: coin, code: coinCodeList[coin] });
  });

  let requestList = [];
  // Create axios request for each coin
  reqQue.forEach((coin) => {
    requestList.push(
      axios.get(process.env.NEXT_PUBLIC_BINANCE_URL + coin.code)
    );
  });

  let results = [];

  await axios.all(requestList).then(
    axios.spread((...responses) => {
      responses.forEach((res, idx) => {
        results.push({
          coin: coinList[idx],
          price: res.data.asks[0][0].split(".")[0],
        });
      });
    })
  );

  return results;
};

export default fetchBinanceData;
