import axios from "axios";
import { Markets } from "../app/markets";

const fetchParibuData = async (coinList: string[]) => {
  // Local code for coins
  let coinCodeList = Markets.filter((market) => {
    return market.name == "paribu";
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
      axios.get(
        process.env.NEXT_PUBLIC_PARIBU_URL + coin.code + "?interval=1000"
      )
    );
  });

  let results = [];

  await axios.all(requestList).then(
    axios.spread((...responses) => {
      responses.forEach((res, idx) => {
        results.push({
          coin: coinList[idx],
          price: res.data.data.marketMatches[0].price.split(".")[0],
        });
      });
    })
  );

  return results;
};

export default fetchParibuData;
