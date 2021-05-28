import fetchParibuData from "./paribuService";
import fetchBinanceData from "./binanceService";

export const mergeCoinDatas = async (
  coinList: string[],
  market1: string,
  market2: string
) => {
  let market1Data;
  let market2Data;

  switch (market1) {
    case "paribu":
      market1Data = fetchParibuData(coinList);
      break;
    case "binance":
      market1Data = fetchBinanceData(coinList);
      break;
    default:
      break;
  }

  switch (market2) {
    case "paribu":
      market2Data = fetchParibuData(coinList);
      break;
    case "binance":
      market2Data = fetchBinanceData(coinList);
      break;
    default:
      break;
  }

  let results = [];

  // Add paribu data to result array
  await market1Data.then((res) => {
    res.forEach((r) => {
      r = Object.assign(r, { market: market1 });
      results.push(r);
    });
  });
  // Add binance data to result array
  await market2Data.then((res) => {
    res.forEach((r) => {
      r = Object.assign(r, { market: market2 });
      results.push(r);
    });
  });

  return results;
};
