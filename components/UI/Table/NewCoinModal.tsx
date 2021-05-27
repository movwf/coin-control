import { useState } from "react";
import { batch, useSelector } from "react-redux";
import { useAppDispatch, RootState } from "../../../app/store";
import { toggle } from "../../../features/UI/menuToggleSlice";
import { Coins } from "../../../app/coins";

function NewCoinModal() {
  const menuOpen = useSelector<RootState>((state) => state.menuToggle);
  const [formData, setFormData] = useState({ coin: "btc", currency: "try" });
  const dispatch = useAppDispatch();
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
        onChange={(e) => {
          setFormData({ ...formData, coin: e.target.value });
        }}
      >
        {Coins?.map((coin, idx) => (
          <option key={idx} value={coin} className="bg-black">
            {coin.toUpperCase()}
          </option>
        ))}
      </select>
      <span className="row mt-4 ml-4 font-extrabold text-2xl">Currency</span>
      <span className="row text-gray-300 dark:text-gray-500 italic text-sm ml-4">
        Which currency you want your pricing data.
      </span>
      <select
        name="currency"
        id="currency"
        className="row w-48 h-10 mt-4 ml-4 p-2  rounded-3xl outline-none border-2 border-primary-dark bg-transparent appearance-non"
        onChange={(e) => {
          setFormData({ ...formData, currency: e.target.value });
        }}
      >
        <option value="try" className="bg-black">
          TRY
        </option>
        <option value="eur" className="bg-black">
          EUR
        </option>
      </select>
      <div
        className="row w-32 h-10 mr-4 mb-5 mt-auto ml-auto text-sm text-white rounded-full bg-primary hover:bg-primary-dark focus:outline-none focus:ring focus:ring-primary focus:ring-offset-1 focus:ring-offset-white dark:focus:ring-offset-dark flex flex-row justify-center items-center pointer-cursor"
        // TODO: Need proper way to handle
        onClick={() => {
          // Close modal
          dispatch(toggle({ menu: "add-coin" }));
        }}
      >
        Save
      </div>
    </>
  );
}

export default NewCoinModal;
