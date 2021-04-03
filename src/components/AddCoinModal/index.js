import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCoin } from "../../features/coin/coinSlice";
import DataList from "./DataList";
import { paribuSymbols, binanceSymbols } from "../../app/constants";

function AddCoinModal({ props }) {
  const dispatch = useDispatch();
  const [formData, setformData] = useState({});

  const record = (key, value) => {
    let data = {};
    data[key] = value;
    setformData(Object.assign(formData, data));
  };

  const sendForm = (sendData) => {
    dispatch(
      addCoin({
        coinName: sendData.coinName,
        coinId: sendData["pa-key"],
        paribuId: sendData["pa-key"],
        binanceId: sendData["bi-key"],
        paribuPrice: "1",
        binancePrice: "1",
      })
    );
  };
  return (
    <div
      className="fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  className="text-lg leading-6 font-medium text-gray-900"
                  id="modal-title"
                >
                  Add New Coin
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Are you sure you want to deactivate your account? All of
                    your data will be permanently removed. This action cannot be
                    undone.
                  </p>
                </div>
                <div className="mt-1 items-center w-full p-3 space-y-4 text-black-500 md:inline-flex md:space-y-0">
                  <div className="max-w-sm mx-auto md:w-1/3">Name</div>
                  <input
                    type="text"
                    className="max-w-sm mx-auto md:w-2/3 border rounded-full p-3"
                    onChange={(e) => {
                      record("coinName", e.target.value);
                    }}
                    placeholder="Name"
                  />
                </div>
                <div className="mt-1 items-center w-full p-3 space-y-4 text-black-500 md:inline-flex md:space-y-0">
                  <div className="max-w-sm mx-auto md:w-1/3">Paribu Symbol</div>
                  <DataList
                    props={{
                      symbol: paribuSymbols,
                      key: "pa-",
                      name: "paribu-name",
                      list: "paribu-names",
                      record: record,
                    }}
                  />
                </div>
                <div className="mt-1 items-center w-full p-3 space-y-4 text-black-500 md:inline-flex md:space-y-0">
                  <div className="max-w-sm mx-auto md:w-1/3">
                    Binance Symbol
                  </div>
                  <DataList
                    props={{
                      symbol: binanceSymbols,
                      key: "bi-",
                      name: "binance-name",
                      list: "binance-names",
                      record: record,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={() => {
                sendForm(formData);
                props.setOpenModal((s) => !s);
              }}
            >
              Add
            </button>
            <button
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={() => {
                props.setOpenModal((s) => !s);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCoinModal;
