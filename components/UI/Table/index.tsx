import { useState } from "react";
import TableRow from "./TableRow";
import { ChevronDownIcon } from "@heroicons/react/outline";
const CoinData = [
  {
    name: "BTC",
    code: "btc", // btc-tl Paribu btctry Binance
    prices: [
      { market: "Paribu", currentPrice: 450000 },
      { market: "Binance", currentPrice: 435000 },
    ],
  },
];

function index() {
  const [menuOpen, setMenuOpen] = useState({
    "market-1": false,
    "market-2": false,
  });
  return (
    <div className="h-full bg-white rounded-md dark:bg-darker">
      <table className="min-w-full">
        <thead className="p-4 h-full w-full border-b dark:border-primary text-primary-dark dark:text-light">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 h-full text-left text-xs font-medium  uppercase tracking-wider"
            >
              COIN
            </th>
            <th className="relative px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider hover:bg-primary-dark hover:dark:bg-primary-light cursor-pointer">
              <div
                className="flex flex-row h-full w-full"
                onClick={() => {
                  setMenuOpen({
                    ...menuOpen,
                    "market-1": !menuOpen["market-1"],
                  });
                }}
                onMouseOver={() => {
                  setMenuOpen({
                    ...menuOpen,
                    "market-1": !menuOpen["market-1"],
                  });
                }}
              >
                <span className="col">{CoinData[0].prices[0].market}</span>
                <span className="col ml-auto">
                  <ChevronDownIcon className="w-4 h-4" />
                </span>
              </div>
              <div
                hidden={!menuOpen["market-1"]}
                className="absolute right-0 w-full top-10 border"
                onMouseLeave={() => {
                  setMenuOpen({
                    ...menuOpen,
                    "market-1": !menuOpen["market-1"],
                  });
                }}
              >
                <ul className="flex flex-col list-none">
                  <li
                    className="row w-full h-10 flex flex-row justify-center items-center bg-primary-darker hover:bg-primary-light"
                    onClick={() => {
                      alert("1");
                    }}
                  >
                    Paribu
                  </li>
                  <li className="row w-full h-10 flex flex-row justify-center items-center bg-primary-darker hover:bg-primary-light">
                    Binance
                  </li>
                  <li className="row w-full h-10 flex flex-row justify-center items-center bg-primary-darker hover:bg-primary-light">
                    Bitvavo
                  </li>
                </ul>
              </div>
            </th>
            <th className="relative px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider hover:bg-primary-dark hover:dark:bg-primary-light cursor-pointer">
              <div
                className="flex flex-row"
                onClick={() => {
                  setMenuOpen({
                    ...menuOpen,
                    "market-2": !menuOpen["market-2"],
                  });
                }}
                onMouseOver={() => {
                  setMenuOpen({
                    ...menuOpen,
                    "market-2": !menuOpen["market-2"],
                  });
                }}
              >
                <span className="col">{CoinData[0].prices[1].market}</span>
                <span className="col ml-auto">
                  <ChevronDownIcon className="w-4 h-4" />
                </span>
              </div>
              <div
                hidden={!menuOpen["market-2"]}
                className="absolute right-0 w-full top-10 border"
                onMouseLeave={() => {
                  setMenuOpen({
                    ...menuOpen,
                    "market-2": !menuOpen["market-2"],
                  });
                }}
              >
                <ul className="flex flex-col list-none">
                  <li className="row w-full h-10 flex flex-row justify-center items-center bg-primary-darker hover:bg-primary-light">
                    Paribu
                  </li>
                  <li className="row w-full h-10 flex flex-row justify-center items-center bg-primary-darker hover:bg-primary-light">
                    Binance
                  </li>
                  <li className="row w-full h-10 flex flex-row justify-center items-center bg-primary-darker hover:bg-primary-light">
                    Bitvavo
                  </li>
                </ul>
              </div>
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
            >
              STATUS
            </th>
            <th scope="col" className="relative px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody className="text-primary-dark dark:text-primary-light ">
          <TableRow {...CoinData[0]} />
        </tbody>
      </table>
    </div>
  );
}

export default index;
