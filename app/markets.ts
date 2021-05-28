interface IMarket {
  name: string;
  coins: {
    [key: string]: any;
  };
}

export const Markets: IMarket[] = [
  {
    name: "paribu",
    coins: {
      btc: "btc-tl",
      eth: "eth-tl",
      xrp: "xrp-tl",
    },
  },
  {
    name: "binance",
    coins: {
      btc: "BTCTRY",
      eth: "ETHTRY",
      xrp: "XRPTRY",
    },
  },
  {
    name: "bitvavo",
    coins: {
      btc: "BTC-EUR",
      eth: "ETH-EUR",
      xrp: "XRP-EUR",
    },
  },
];
