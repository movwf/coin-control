import { Dispatch, SetStateAction } from "react";

interface IToggle {
  toggle: {
    state: {
      "market-1": boolean;
      "market-2": boolean;
      "add-coin": boolean;
    };
    action: Dispatch<
      SetStateAction<{
        "market-1": boolean;
        "market-2": boolean;
        "add-coin": boolean;
      }>
    >;
  };
}

function index({ toggle }: IToggle) {
  return (
    <div
      className="h-full w-full transition duration-500 ease-in-out fixed inset-0 z-10 flex flex-row justify-center items-center"
      aria-hidden="true"
    >
      <div className="w-1/2 h-2/5 rounded-2xl bg-gray-900 border-4 border-primary-darker flex flex-col">
        <div className="row w-full h-10 text-light bg-primary-darker rounded-t-lg border-b-2 border-primary-darker flex flex-col justify-center">
          <span className="ml-4 row text-xl">Settings</span>
        </div>
        <div className="row h-full w-full text-light flex flex-col">
          {/* children */}
          <span className="row mt-4 ml-4 font-extrabold text-2xl">
            Interval
          </span>
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

          <div
            className="row w-32 h-10 mr-4 mb-5 mt-auto ml-auto text-sm text-white rounded-full bg-primary hover:bg-primary-dark focus:outline-none focus:ring focus:ring-primary focus:ring-offset-1 focus:ring-offset-white dark:focus:ring-offset-dark flex flex-row justify-center items-center pointer-cursor"
            onClick={() => {
              toggle.action({
                ...toggle.state,
                "add-coin": !toggle.state["add-coin"],
              });
            }}
          >
            Save
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
