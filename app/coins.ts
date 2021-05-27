export let Coins = ["btc", "eth", "xrp"];

export const setCoinList = (coinList: string[]) => {
  // Clear array
  Coins = [];

  // Push new data
  Coins = coinList;
};
