import { HomeIcon, ChevronDownIcon } from "@heroicons/react/outline";

type Toggle = { menu: boolean };

function SmallMenu(toggle: Toggle) {
  return (
    <div
      className="border-b md:hidden dark:border-primary-darker"
      hidden={toggle.menu}
    >
      <nav aria-label="Main" className="px-2 py-4 space-y-2">
        <div>
          {/* active & hover classes 'bg-primary-100 dark:bg-primary' */}
          <a
            href="/"
            className="flex items-center p-2 text-gray-500 transition-colors rounded-md dark:text-light hover:bg-primary-100 dark:hover:bg-primary"
            role="button"
            aria-haspopup="true"
          >
            <HomeIcon className="w-5 h-5" />
            <span className="ml-2 text-sm"> Home </span>
            {/* Toggle menu */}
            {/* <span className="ml-auto" aria-hidden="true">
              <ChevronDownIcon className="w-5 h-5" />
            </span> */}
          </a>
        </div>
      </nav>
    </div>
  );
}

export default SmallMenu;
