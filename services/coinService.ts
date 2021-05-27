import fetchParibuData from "./paribuService";
import fetchBinanceData from "./binanceService";

export const mergeCoinDatas = async (coinList: string[]) => {
  let paribuData = fetchParibuData(coinList);
  let binanceData = fetchBinanceData(coinList);

  let results = [];

  // Add paribu data to result array
  await paribuData.then((res) => {
    res.forEach((r) => {
      r = Object.assign(r, { market: "paribu" });
      results.push(r);
    });
  });
  // Add binance data to result array
  await binanceData.then((res) => {
    res.forEach((r) => {
      r = Object.assign(r, { market: "binance" });
      results.push(r);
    });
  });

  return results;
};
