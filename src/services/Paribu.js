import axios from "axios";

const fetchParibuData = async () => {
  const req1 = axios.get(
    process.env.REACT_APP_PARIBU_URL + "btc-tl?interval=1000"
  );
  const req2 = axios.get(
    process.env.REACT_APP_PARIBU_URL + "eth-tl?interval=1000"
  );

  let passData = [];

  await axios.all([req1, req2]).then(
    axios.spread((res1, res2) => {
      const coinName1 = res1.data.data.charts.market;
      const price1 = res1.data.data.marketMatches[0];
      const coinName2 = res2.data.data.charts.market;
      const price2 = res2.data.data.marketMatches[0];

      passData.push({ name: coinName1, price: price1 });
      passData.push({ name: coinName2, price: price2 });
    })
  );
  return passData;
};

export default fetchParibuData;
