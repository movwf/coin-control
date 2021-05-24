interface ICoinTable {
  name: string;
  code: string;
  prices: { market: string; currentPrice: number }[];
}

function TableRow(coin: ICoinTable) {
  const diff = coin.prices[1].currentPrice - coin.prices[0].currentPrice;
  return (
    <tr className="border dark:border-primary hover:bg-primary-dark">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10">
            <div className="h-10 w-10 border rounded-full flex flex-col justify-center items-center">
              <span className="row">{coin.name.substring(0, 3)}</span>
            </div>
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-black dark:text-light">
              {coin.name}
            </div>
            <div className="text-sm text-gray-400">{coin.code}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-black dark:text-light">
          {coin.prices[0].currentPrice.toLocaleString()}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-black dark:text-light">
          {coin.prices[1].currentPrice.toLocaleString()}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        {/* Badge for status */}
        <span
          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-${
            diff > 0 ? "green" : "red"
          }-300 text-${diff > 0 ? "green" : "red"}-800`}
        >
          {diff.toLocaleString()}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        {/* Edit Icons */}
        <a href="#" className="text-primary-dark dark:text-light">
          Edit
        </a>
      </td>
    </tr>
  );
}

export default TableRow;
