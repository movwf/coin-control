import { Dispatch, SetStateAction } from "react";

interface IToggle {
  name: string;
  title: string;
  toggle: {
    state: {
      "market-1": boolean;
      "market-2": boolean;
      "add-coin": boolean;
      settings: boolean;
    };
    action: Dispatch<
      SetStateAction<{
        "market-1": boolean;
        "market-2": boolean;
        "add-coin": boolean;
        settings: boolean;
      }>
    >;
  };
  children: JSX.Element;
}

function index({ name, title, toggle, children }: IToggle) {
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
          <div
            className="row w-32 h-10 mr-4 mb-5 mt-auto ml-auto text-sm text-white rounded-full bg-primary hover:bg-primary-dark focus:outline-none focus:ring focus:ring-primary focus:ring-offset-1 focus:ring-offset-white dark:focus:ring-offset-dark flex flex-row justify-center items-center pointer-cursor"
            // TODO: Need proper way to handle
            onClick={() => {
              if (name == "add-coin") {
                toggle.action({
                  ...toggle.state,
                  "add-coin": !toggle.state["add-coin"],
                });
              }
              if (name == "settings") {
                toggle.action({
                  ...toggle.state,
                  settings: !toggle.state["settings"],
                });
              }
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
