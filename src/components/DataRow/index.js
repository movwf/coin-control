function DataRow({ props }) {
  const propsDiff = parseInt(props.binancePrice) - parseInt(props.paribuPrice);
  let iconText = (props.coinName + "").slice(0, 3);

  return (
    <tbody className="bg-white divide-y divide-gray-200">
      <tr>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="flex items-center">
            <div className="flex-shrink-0 h-10 w-10">
              <div className="h-10 w-10 rounded-full border flex items-center">
                <span className="flex-1 text-center">{iconText}</span>
              </div>
            </div>
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-900">
                {props.coinName}
              </div>
              <div className="text-sm text-gray-500">{props.coinId}</div>
            </div>
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-900">{props.paribuPrice} ₺</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-900">{props.binancePrice} ₺</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span
            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
              propsDiff > 0
                ? "bg-green-100 text-green-800"
                : propsDiff === 0
                ? "bg-yellow-100 text-yellow-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {propsDiff} ₺
          </span>
        </td>
      </tr>
    </tbody>
  );
}

export default DataRow;
