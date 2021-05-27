import { useSelector } from "react-redux";
import { updateCoin } from "../features/Coin/coinSlice";
import { useAppDispatch, RootState } from "../app/store";
import { mergeCoinDatas } from "../services/coinService";

function test() {
  const data = useSelector<RootState>((state) => state.coin);
  //startCoinService(["btc", "eth"], "paribu", "binance", 1000);
  //addMarketToQue("paribu", "binance");
  //fetchCoinData(["btc", "eth"]).then((res) => console.log(res));
  const dispatch = useAppDispatch();
  return (
    <div>
      <span>
        {
          data["coins"]
            .filter((coin) => {
              return coin.code == "btc";
            })[0]
            .prices.filter((price) => {
              return price.market == "paribu";
            })[0].currentPrice
        }
      </span>
      <br />
      <button
        onClick={() => {
          let data = mergeCoinDatas(["btc", "eth"]);
          data.then((coin) => {
            coin.forEach((c) => {
              dispatch(
                updateCoin({
                  coin: c.coin,
                  market: c.market,
                  price: c.price,
                })
              );
            });
          });
          //dispatch(
          // startService({
          //   selectedCoinList: ["btc", "eth"],
          //   market1: "paribu",
          //   market2: "binance",
          // })
          //);
        }}
        className="w-24 h-10 bg-gray-100 border-2"
      >
        Run
      </button>
    </div>
  );
}

export default test;
