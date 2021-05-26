import { addMarketToQue, fetchCoinData } from "../services/coinService";

function test() {
  addMarketToQue("paribu", "binance");
  return <div>Test</div>;
}

export default test;
