import axios from "axios";

const fetchBinanceData = async () => {
  const req1 = axios.get(
    process.env.REACT_APP_BINANCE_URL + "?symbol=BTCTRY&limit=10"
  );
  const req2 = axios.get(
    process.env.REACT_APP_BINANCE_URL + "?symbol=ETHTRY&limit=10"
  );

  let passData = [];

  await axios.all([req1, req2]).then(
    axios.spread((res1, res2) => {
      const price1 = res1.data.asks[0][0].split(".")[0];
      const price2 = res2.data.asks[0][0].split(".")[0];

      passData.push({ name: "btc-tl", price: price1 });
      passData.push({ name: "eth-tl", price: price2 });
    })
  );
  return passData;
};

export default fetchBinanceData;
