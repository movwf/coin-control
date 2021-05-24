import { useState } from "react";
import Backdrop from "./Backdrop";
import { XIcon } from "@heroicons/react/outline";

interface IDrawer {
  children: JSX.Element;
  position: "right" | "left";
}

function index({ children, position }: IDrawer) {
  const [drawerOpen, setDrawerOpen] = useState({
    "left-drawer": false,
    "right-drawer": false,
  });
  const [backdropOpen, setBackdropOpen] = useState(
    drawerOpen["left-drawer"] || drawerOpen["right-drawer"] ? true : false
  );
  return (
    <>
      <Backdrop {...{ toggle: backdropOpen }} />
      {/* <!-- Panel --> */}
      <section
        // x-transition:enter="transition duration-300 ease-in-out transform sm:duration-500"
        // x-transition:enter-start="translate-x-full"
        // x-transition:enter-end="translate-x-0"
        // x-transition:leave="transition duration-300 ease-in-out transform sm:duration-500"
        // x-transition:leave-start="translate-x-0"
        // x-transition:leave-end="translate-x-full"
        hidden={
          drawerOpen["left-drawer"] || drawerOpen["right-drawer"] ? false : true
        }
        className={`fixed inset-y-0 ${
          position == "right" ? "right-0 " : ""
        } z-20 w-full max-w-xs bg-white shadow-xl dark:bg-darker dark:text-light sm:max-w-md focus:outline-none`}
        aria-labelledby="settinsPanelLabel"
      >
        <div
          className={`absolute p-2 transform ${
            position == "right"
              ? "left-0  -translate-x-full"
              : "right-0  translate-x-full"
          }`}
        >
          {/* <!-- Close button --> */}
          <button
            onClick={() => {
              setDrawerOpen({
                "right-drawer":
                  position == "right"
                    ? !drawerOpen["right-drawer"]
                    : drawerOpen["right-drawer"],
                "left-drawer":
                  position == "right"
                    ? drawerOpen["left-drawer"]
                    : !drawerOpen["left-drawer"],
              });
              setBackdropOpen(false);
            }}
            className="p-2 text-white rounded-md focus:outline-none focus:ring"
          >
            <XIcon className="w-5 h-5" />
          </button>
        </div>
        {children}
      </section>
    </>
  );
}

export default index;
