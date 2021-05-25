import { useState } from "react";
import Modal from "../Modal";
import TableRow from "./TableRow";
import Backdrop from "../../Layout/Drawer/Backdrop";
import NewCoinModal from "./NewCoinModal";
import { ChevronDownIcon, PlusIcon, CogIcon } from "@heroicons/react/outline";

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
    "add-coin": false,
    settings: false,
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
            <th
              className="relative px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider hover:text-light  hover:bg-primary-dark 
            dark:hover:bg-primary-light cursor-pointer"
            >
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
                <ul className="flex flex-col list-none text-light">
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
            <th className="relative px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider hover:text-light hover:bg-primary-dark dark:hover:bg-primary-light cursor-pointer">
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
                <ul className="flex flex-col list-none text-light">
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
          {CoinData?.map((coin, idx) => (
            <TableRow key={idx} {...coin} />
          ))}
        </tbody>
      </table>
      <div className="m-4 h-15 w-full flex flex-row justify-center items-center">
        <button
          className="transition duration-500 ease-in-out bg-primary dark:bg-primary-light dark:hover:bg-primary-lighter text-white dark:text-black hover:bg-primary-darker h-10 w-40 rounded-full flex flex-row justify-center items-center flex-nowrap"
          onClick={() => {
            setMenuOpen({
              ...menuOpen,
              "add-coin": !menuOpen["add-coin"],
            });
          }}
        >
          <span className="col mr-2">
            <PlusIcon className="w-6 h-6" />
          </span>
          <span className="col"> Add New Coin</span>
        </button>
        <button
          className="transition duration-500 ease-in-out ml-2 bg-primary dark:bg-primary-light dark:hover:bg-primary-lighter text-white dark:text-black hover:bg-primary-darker h-10 w-10 rounded-full flex flex-col justify-center items-center"
          onClick={() => {
            setMenuOpen({
              ...menuOpen,
              settings: !menuOpen["settings"],
            });
          }}
        >
          <span className="col">
            <CogIcon className="w-6 h-6" />
          </span>
        </button>
      </div>
      <Backdrop {...{ toggle: menuOpen["add-coin"] || menuOpen["settings"] }} />
      {menuOpen["add-coin"] && (
        <Modal
          title="Add New Coin"
          name="add-coin"
          toggle={{ state: menuOpen, action: setMenuOpen }}
          children={<NewCoinModal />}
        />
      )}
      {menuOpen["settings"] && (
        <Modal
          title="Settings"
          name="settings"
          toggle={{ state: menuOpen, action: setMenuOpen }}
          children={<NewCoinModal />}
        />
      )}
    </div>
  );
}

export default index;
