import { useState, useEffect, useRef } from "react";
import { useAppDispatch, RootState } from "../app/store";
import { useSelector } from "react-redux";
import { mergeCoinDatas } from "../services/coinService";
import { updateCoin, updateMarket } from "../features/Coin/coinSlice";

function useInterval(callback, delay) {
  const savedCallback = useRef<() => void>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

function test() {
  const coinData = useSelector<RootState>((state) => state.coin);
  const dispatch = useAppDispatch();

  const [initValue, setInitValue] = useState(0);
  const [counter, setCounter] = useState(0);
  const [changed, setChanged] = useState(false);

  useInterval(() => {
    if (!changed) {
      mergeCoinDatas(
        coinData["coins"].map((coin) => {
          return coin.code;
        }),
        coinData["activeMarkets"]["market-1"],
        coinData["activeMarkets"]["market-2"]
      ).then((res) => {
        res.forEach((r) => {
          dispatch(
            updateCoin({
              coin: r.coin,
              market: r.market,
              price: parseInt(r.price),
            })
          );
        });
      });
    }
  }, 1000);

  return (
    <div>
      <span>{JSON.stringify(coinData["coins"][0].prices[0])}</span>
      <br />
      <span>{JSON.stringify(coinData["coins"][0].prices[1])}</span>
      <br />
      <button
        onMouseOver={() => {
          setChanged(!changed);
          dispatch(updateMarket({ market: "binance", position: 1 }));
          if (
            coinData["activeMarkets"]["market-1"] ==
            coinData["activeMarkets"]["market-2"]
          ) {
            dispatch(updateMarket({ market: "paribu", position: 2 }));
          }
        }}
        onClick={() => {
          setChanged(!changed);
        }}
        className="w-24 h-10 bg-gray-100 border-2"
      >
        Run
      </button>
    </div>
  );
}

export default test;
