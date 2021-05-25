function NewCoinModal() {
  return (
    <>
      <span className="row mt-4 ml-4 font-extrabold text-2xl">Interval</span>
      <span className="row text-gray-300 dark:text-gray-500 italic text-sm ml-4">
        Set interval for data retrieving.
      </span>
      <select
        name="interval"
        id="interval"
        className="row w-48 h-10 mt-4 ml-4 p-2  rounded-3xl outline-none border-2 border-primary-dark bg-transparent appearance-non"
      >
        <option value="1000" className="bg-black">
          1 sec
        </option>
        <option value="2000" className="bg-black">
          2 sec
        </option>
        <option value="3000" className="bg-black">
          3 sec
        </option>
        <option value="4000" className="bg-black">
          4 sec
        </option>
        <option value="5000" className="bg-black">
          5 sec
        </option>
      </select>
    </>
  );
}

export default NewCoinModal;
