import { useState } from "react";
import { useAppDispatch } from "../../../app/store";
import { changeTheme } from "../../../features/UI/themeSlice";
import SmallMenu from "./SmallMenu";
import {
  DotsVerticalIcon,
  MenuIcon,
  MoonIcon,
  StarIcon,
  BellIcon,
  SearchIcon,
  CogIcon,
} from "@heroicons/react/outline";

function index() {
  const [openMenu, setOpenMenu] = useState({
    "large-topbar": false,
    "small-topbar": false,
    topbar: false,
    menu: false,
  });
  const dispatch = useAppDispatch();
  return (
    <header className="relative bg-white dark:bg-darker">
      <div className="flex items-center justify-between p-2 border-b dark:border-primary-darker">
        <button
          className="p-1 transition-colors duration-200 rounded-md text-primary-lighter bg-primary-50 hover:text-primary hover:bg-primary-100 dark:hover:text-light dark:hover:bg-primary-dark dark:bg-dark md:hidden focus:outline-none focus:ring"
          onClick={() => {
            setOpenMenu({
              ...openMenu,
              menu: !openMenu["menu"],
            });
          }}
        >
          <span className="sr-only">Open Main Menu</span>
          <span aria-hidden="true">
            <MenuIcon className="w-8 h-8" />
          </span>
        </button>
        <a
          href="/"
          className="inline-block text-2xl font-bold tracking-wider uppercase text-primary-dark dark:text-light"
        >
          Coin-Control
        </a>
        <button
          className="p-1 transition-colors duration-200 rounded-md text-primary-lighter bg-primary-50 hover:text-primary hover:bg-primary-100 dark:hover:text-light dark:hover:bg-primary-dark dark:bg-dark md:hidden focus:outline-none focus:ring"
          onClick={() => {
            setOpenMenu({
              ...openMenu,
              topbar: !openMenu["topbar"],
            });
          }}
        >
          <span className="sr-only">Open Sub Menu</span>
          <span aria-hidden="true">
            <DotsVerticalIcon className="w-8 h-8" />
          </span>
        </button>
        {/* Desktop nav buttons */}
        <nav
          aria-label="Secondary"
          className="hidden space-x-2 md:flex md:items-center"
        >
          {/* Dark theme button */}
          <button
            aria-hidden="true"
            className="relative focus:outline-none"
            onClick={() => {
              dispatch(changeTheme());
            }}
          >
            <div className="w-6 h-6 transition rounded-full outline-none bg-primary-100 dark:bg-primary-lighter"></div>
            <div className="absolute top-0 left-0 inline-flex items-center justify-center w-6 h-6 transition-all duration-150 transform scale-110 rounded-full shadow-sm">
              <MoonIcon className="w-4 h-4" />
            </div>
          </button>
          {/* Notification button */}
          <button className="p-2 transition-colors duration-200 rounded-full text-primary-lighter bg-primary-50 hover:text-primary hover:bg-primary-100 dark:hover:text-light dark:hover:bg-primary-dark dark:bg-dark focus:outline-none focus:bg-primary-100 dark:focus:bg-primary-dark focus:ring-primary-darker">
            <span className="sr-only">Open Notification panel</span>
            <BellIcon className="w-7 h-7" />
          </button>
          {/* Search button */}
          <button className="p-2 transition-colors duration-200 rounded-full text-primary-lighter bg-primary-50 hover:text-primary hover:bg-primary-100 dark:hover:text-light dark:hover:bg-primary-dark dark:bg-dark focus:outline-none focus:bg-primary-100 dark:focus:bg-primary-dark focus:ring-primary-darker">
            <span className="sr-only">Open search panel</span>
            <SearchIcon className="w-7 h-7" />
          </button>
          {/* Settings button */}
          <button className="p-2 transition-colors duration-200 rounded-full text-primary-lighter bg-primary-50 hover:text-primary hover:bg-primary-100 dark:hover:text-light dark:hover:bg-primary-dark dark:bg-dark focus:outline-none focus:bg-primary-100 dark:focus:bg-primary-dark focus:ring-primary-darker">
            <span className="sr-only">Open settings panel</span>
            <CogIcon className="w-7 h-7" />
          </button>
          {/* User avatar  */}
          <div className="relative" x-data="{ open: false }">
            <button
              type="button"
              aria-haspopup="true"
              className="transition-opacity duration-200 rounded-full dark:opacity-75 dark:hover:opacity-100 focus:outline-none focus:ring dark:focus:opacity-100"
              onClick={() => {
                setOpenMenu({
                  ...openMenu,
                  "large-topbar": !openMenu["large-topbar"],
                });
              }}
            >
              <span className="sr-only">User menu</span>
              <div className="w-8 h-8 rounded-full border-2 bg-primary-light">
                &nbsp;
              </div>
              {/* <img className="w-10 h-10 rounded-full" src="#" alt="Test" /> */}
            </button>
            {/* User dropdown menu */}
            <div
              className="absolute right-0 w-48 py-1 bg-white rounded-md shadow-lg top-12 ring-1 ring-black ring-opacity-5 dark:bg-dark focus:outline-none"
              //tabindex="-1"
              hidden={!openMenu["large-topbar"]}
              role="menu"
              aria-orientation="vertical"
              aria-label="User menu"
            >
              <a
                href="#"
                role="menuitem"
                className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-light dark:hover:bg-primary"
              >
                Your Profile
              </a>
              <a
                href="#"
                role="menuitem"
                className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-light dark:hover:bg-primary"
              >
                Settings
              </a>
              <a
                href="#"
                role="menuitem"
                className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-light dark:hover:bg-primary"
              >
                Logout
              </a>
            </div>
          </div>
        </nav>
        {/* Mobile sub menu */}
        {openMenu["topbar"] && (
          <nav
            className="absolute flex items-center p-4 bg-white rounded-md shadow-lg dark:bg-darker top-16 inset-x-4 md:hidden"
            aria-label="Secondary"
          >
            <div className="space-x-2 w-full">
              {/* Toggle dark theme button */}
              <button
                aria-hidden="true"
                className="relative focus:outline-none"
              >
                {/* TODO: Theme setter */}
                <div
                  className={`inline-flex items-center justify-center w-6 h-6 transition-all duration-200 transform scale-110 rounded-full shadow-sm ${
                    true
                      ? "translate-x-0 -translate-y-px  bg-white text-primary-dark"
                      : "translate-x-6 text-primary-100 bg-primary-darker"
                  }`}
                >
                  <MoonIcon className="w-7 h-7" />
                </div>
              </button>
              {/* Notification button */}
              <button className="p-2 transition-colors duration-200 rounded-full text-primary-lighter bg-primary-50 hover:text-primary hover:bg-primary-100 dark:hover:text-light dark:hover:bg-primary-dark dark:bg-dark focus:outline-none focus:bg-primary-100 dark:focus:bg-primary-dark focus:ring-primary-darker">
                <span className="sr-only">Open Notifications Panel</span>
                <BellIcon className="w-7 h-7" />
              </button>
              {/* Search button */}
              <button className="p-2 transition-colors duration-200 rounded-full text-primary-lighter bg-primary-50 hover:text-primary hover:bg-primary-100 dark:hover:text-light dark:hover:bg-primary-dark dark:bg-dark focus:outline-none focus:bg-primary-100 dark:focus:bg-primary-dark focus:ring-primary-darker">
                <span className="sr-only">Open Search Panel</span>
                <SearchIcon className="w-7 h-7" />
              </button>
              {/* Settings button */}
              <button className="p-2 transition-colors duration-200 rounded-full text-primary-lighter bg-primary-50 hover:text-primary hover:bg-primary-100 dark:hover:text-light dark:hover:bg-primary-dark dark:bg-dark focus:outline-none focus:bg-primary-100 dark:focus:bg-primary-dark focus:ring-primary-darker">
                <span className="sr-only">Open Settings Panel</span>
                <CogIcon className="w-7 h-7" />
              </button>
              {/* User avatar button */}
              <div className="absolute top-4 right-2 rounded-full border-2 flex flex-row justify-end">
                <button
                  type="button"
                  aria-haspopup="true"
                  className="transition-opacity duration-200 rounded-full dark:opacity-75 dark:hover:opacity-100 focus:outline-none focus:ring dark:focus:opacity-100"
                  onClick={() => {
                    setOpenMenu({
                      ...openMenu,
                      "small-topbar": !openMenu["small-topbar"],
                    });
                  }}
                >
                  <span className="sr-only">User Menu</span>
                  <div className="w-8 h-8 rounded-full bg-primary-light">
                    &nbsp;
                  </div>
                  {/* <img className="w-10 h-10 rounded-full" src="#" alt="Test" /> */}
                </button>
                {/* User dropdown menu */}
                <div
                  className="absolute right-0 w-48 py-1 origin-top-right bg-white rounded-md shadow-lg top-12 ring-1 ring-black ring-opacity-5 dark:bg-dark"
                  role="menu"
                  hidden={!openMenu["small-topbar"]}
                  aria-orientation="vertical"
                  aria-label="User menu"
                >
                  <a
                    href="#"
                    role="menuitem"
                    className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-light dark:hover:bg-primary"
                  >
                    Your Profile
                  </a>
                  <a
                    href="#"
                    role="menuitem"
                    className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-light dark:hover:bg-primary"
                  >
                    Settings
                  </a>
                  <a
                    href="#"
                    role="menuitem"
                    className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-light dark:hover:bg-primary"
                  >
                    Logout
                  </a>
                </div>
              </div>
            </div>
          </nav>
        )}
      </div>
      {/* Mobile main menu */}
      <SmallMenu {...{ menu: !openMenu.menu }} />
    </header>
  );
}

export default index;
