import React from 'react';

function MenuItem() {
  return (
    <div>
      <a
        href="#"
        className="flex items-center p-2 text-gray-500 transition-colors rounded-md dark:text-light hover:bg-primary-100 dark:hover:bg-primary"
        role="button"
        aria-haspopup="true"
      >
        <span aria-hidden="true">
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </span>
        <span className="ml-2 text-sm"> Dashboards </span>
        <span className="ml-auto" aria-hidden="true">
          <svg
            className="w-4 h-4 transition-transform transform"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </a>
      <div
        role="menu"
        x-show="open"
        className="mt-2 space-y-2 px-7"
        aria-label="Dashboards"
      >
        <a
          href="index.html"
          role="menuitem"
          className="block p-2 text-sm text-gray-700 transition-colors duration-200 rounded-md dark:text-light dark:hover:text-light hover:text-gray-700"
        >
          Default
        </a>
        <a
          href="#"
          role="menuitem"
          className="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:hover:text-light hover:text-gray-700"
        >
          Project Mangement (soon)
        </a>
        <a
          href="#"
          role="menuitem"
          className="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:hover:text-light hover:text-gray-700"
        >
          E-Commerce (soon)
        </a>
      </div>
    </div>
  );
}

export default MenuItem;
