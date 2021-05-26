export const Markets = [
  {
    name: "paribu",
    coins: {
      btc: "btc-tl",
      eth: "eth-tl",
      xrp: "xrp-tl",
    },
    api: process.env.NEXT_PUBLIC_PARIBU_URL,
  },
  {
    name: "binance",
    coins: {
      btc: "BTCTRY",
      eth: "ETHTRY",
      xrp: "XRPTRY",
    },
    api: process.env.NEXT_PUBLIC_BINANCE_URL,
  },
];
