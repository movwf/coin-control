import { useState } from "react";
import { useAppDispatch } from "../../../app/store";
import { toggle } from "../../../features/UI/menuToggleSlice";
import { changeInterval } from "../../../features/Coin/coinSlice";

function SettingsModal() {
  const [formData, setFormData] = useState({ interval: 1000 });
  const dispatch = useAppDispatch();
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
        onChange={(e) => {
          setFormData({ interval: parseInt(e.target.value) });
        }}
      >
        <option value={1000} className="bg-black">
          1 sec
        </option>
        <option value={2000} className="bg-black">
          2 sec
        </option>
        <option value={3000} className="bg-black">
          3 sec
        </option>
        <option value={4000} className="bg-black">
          4 sec
        </option>
        <option value={5000} className="bg-black">
          5 sec
        </option>
      </select>
      <div
        className="row w-32 h-10 mr-4 mb-5 mt-auto ml-auto text-sm text-white rounded-full bg-primary hover:bg-primary-dark focus:outline-none focus:ring focus:ring-primary focus:ring-offset-1 focus:ring-offset-white dark:focus:ring-offset-dark flex flex-row justify-center items-center pointer-cursor"
        // TODO: Need proper way to handle
        onClick={() => {
          // Close modal
          dispatch(toggle({ menu: "settings" }));
          // Send interval value to store
          dispatch(changeInterval(formData));
        }}
      >
        Save
      </div>
    </>
  );
}

export default SettingsModal;
