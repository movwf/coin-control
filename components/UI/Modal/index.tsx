import { useSelector } from "react-redux";
import { useAppDispatch, RootState } from "../../../app/store";

interface IToggle {
  title: string;
  children: JSX.Element;
}

function index({ title, children }: IToggle) {
  return (
    <div
      className="h-full w-full transition duration-500 ease-in-out fixed inset-0 z-10 flex flex-row justify-center items-center"
      aria-hidden="true"
    >
      <div className="w-1/2 h-auto rounded-2xl bg-gray-900 border-4 border-primary-darker flex flex-col">
        <div className="row w-full h-10 text-light bg-primary-darker rounded-t-lg border-b-2 border-primary-darker flex flex-col justify-center">
          <span className="ml-4 row text-xl">{title}</span>
        </div>
        <div className="row h-full w-full text-light flex flex-col">
          {/* children */}
          {children}
        </div>
      </div>
    </div>
  );
}

export default index;
