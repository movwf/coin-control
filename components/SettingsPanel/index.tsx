import { MoonIcon, StarIcon, AdjustmentsIcon } from "@heroicons/react/outline";

function index() {
  return (
    <div className="flex flex-col h-screen">
      {/* <!-- Panel header --> */}
      <div className="flex flex-col items-center justify-center flex-shrink-0 px-4 py-8 space-y-4 border-b dark:border-primary-dark">
        <span aria-hidden="true" className="text-gray-500 dark:text-primary">
          <AdjustmentsIcon className="w-8 h-8" />
        </span>
        <h2
          id="settinsPanelLabel"
          className="text-xl font-medium text-gray-500 dark:text-light"
        >
          Settings
        </h2>
      </div>
      {/* <!-- Content --> */}
      <div className="flex-1 overflow-hidden hover:overflow-y-auto">
        {/* <!-- Theme --> */}
        <div className="p-4 space-y-4 md:p-8">
          <h6 className="text-lg font-medium text-gray-400 dark:text-light">
            Mode
          </h6>
          <div className="flex items-center space-x-8">
            {/* <!-- Light button --> */}
            <button
              //@click="setLightTheme"
              className="flex items-center justify-center px-4 py-2 space-x-4 transition-colors border rounded-md hover:text-gray-900 hover:border-gray-900 dark:border-primary dark:hover:text-primary-100 dark:hover:border-primary-light focus:outline-none focus:ring focus:ring-primary-lighter focus:ring-offset-2 dark:focus:ring-offset-dark dark:focus:ring-primary-dark"
              //:className="{ 'border-gray-900 text-gray-900 dark:border-primary-light dark:text-primary-100': !isDark, 'text-gray-500 dark:text-primary-light': isDark }"
            >
              <span>
                <StarIcon className="w-6 h-6" />
              </span>
              <span>Light</span>
            </button>

            {/* <!-- Dark button --> */}
            <button
              //@click="setDarkTheme"
              className="flex items-center justify-center px-4 py-2 space-x-4 transition-colors border rounded-md hover:text-gray-900 hover:border-gray-900 dark:border-primary dark:hover:text-primary-100 dark:hover:border-primary-light focus:outline-none focus:ring focus:ring-primary-lighter focus:ring-offset-2 dark:focus:ring-offset-dark dark:focus:ring-primary-dark"
              //:className="{ 'border-gray-900 text-gray-900 dark:border-primary-light dark:text-primary-100': isDark, 'text-gray-500 dark:text-primary-light': !isDark }"
            >
              <span>
                <MoonIcon className="w-6 h-6" />
              </span>
              <span>Dark</span>
            </button>
          </div>
        </div>

        {/* <!-- Colors --> */}
        <div className="p-4 space-y-4 md:p-8">
          <h6 className="text-lg font-medium text-gray-400 dark:text-light">
            Colors
          </h6>
          <div>
            <button
              //@click="setColors('cyan')"
              className="w-10 h-10 rounded-full"
              //style="background-color: var(--color-cyan)"
            ></button>
            <button
              //@click="setColors('teal')"
              className="w-10 h-10 rounded-full"
              //style="background-color: var(--color-teal)"
            ></button>
            <button
              //@click="setColors('green')"
              className="w-10 h-10 rounded-full"
              //style="background-color: var(--color-green)"
            ></button>
            <button
              //@click="setColors('fuchsia')"
              className="w-10 h-10 rounded-full"
              //style="background-color: var(--color-fuchsia)"
            ></button>
            <button
              //@click="setColors('blue')"
              className="w-10 h-10 rounded-full"
              //style="background-color: var(--color-blue)"
            ></button>
            <button
              //@click="setColors('violet')"
              className="w-10 h-10 rounded-full"
              //style="background-color: var(--color-violet)"
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
