import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  updateParibuByCoinId,
  getCoinData,
  updateBinanceByCoinId,
} from "./features/coin/coinSlice";
import fetchParibuData from "./services/Paribu";
import fetchBinanceData from "./services/Binance";
import Header from "./components/Header";
import DataRow from "./components/DataRow";
import DataHeader from "./components/DataHeader";
import AddCoinButton from "./components/AddCoinButton";
import AddCoinModal from "./components/AddCoinModal";

function App() {
  const coin = useSelector(getCoinData);
  const dispatch = useDispatch();

  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const retData = async () => {
      const temp = await fetchParibuData();
      const temp2 = await fetchBinanceData();

      temp.forEach((item) => {
        dispatch(
          updateParibuByCoinId({
            coinId: item.name,
            price: item.price.price.split(".")[0],
          })
        );
      });
      temp2.forEach((item) => {
        dispatch(
          updateBinanceByCoinId({
            coinId: item.name,
            price: item.price,
          })
        );
      });
    };

    retData();

    setInterval(() => {
      retData();
    }, 2000);
  }, [dispatch]);

  return (
    <div className="App m-20 items-center">
      <div className="flex flex-col text-center">
        <Header />
      </div>
      <div className="flex flex-col">
        <div className="my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <DataHeader />
                {coin?.map((props, index) => (
                  <DataRow key={index} props={props} />
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
      <AddCoinButton props={{ setOpenModal }} />
      {openModal && <AddCoinModal props={{ setOpenModal }} />}
      <div className="flex flex-col items-center italic">
        <span>
          2021 - <a href="github.com/kt-sec">GitHub</a>
        </span>
      </div>
    </div>
  );
}

export default App;
