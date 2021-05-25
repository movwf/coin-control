function NewCoinModal() {
  return (
    <>
      <span className="row mt-4 ml-4 font-extrabold text-2xl">Coin Name</span>
      <span className="row text-gray-300 dark:text-gray-500 italic text-sm ml-4">
        Select which coin you want to add to table.
      </span>
      <select
        name="interval"
        id="interval"
        className="row w-48 h-10 mt-4 ml-4 p-2  rounded-3xl outline-none border-2 border-primary-dark bg-transparent appearance-non"
      >
        <option value="btc" className="bg-black">
          BTC
        </option>
        <option value="xrp" className="bg-black">
          XRP
        </option>
      </select>
      <span className="row mt-4 ml-4 font-extrabold text-2xl">Currency</span>
      <span className="row text-gray-300 dark:text-gray-500 italic text-sm ml-4">
        Which currency you want your pricing data.
      </span>
      <select
        name="interval"
        id="interval"
        className="row w-48 h-10 mt-4 ml-4 p-2  rounded-3xl outline-none border-2 border-primary-dark bg-transparent appearance-non"
      >
        <option value="btc" className="bg-black">
          TRY
        </option>
        <option value="xrp" className="bg-black">
          EUR
        </option>
      </select>
    </>
  );
}

export default NewCoinModal;
