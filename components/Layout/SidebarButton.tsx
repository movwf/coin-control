import { AdjustmentsIcon } from "@heroicons/react/outline";

function SidebarButton() {
  return (
    <div className="flex-shrink-0 px-2 py-4 space-y-2">
      <button
        type="button"
        className="flex items-center justify-center h-10 w-full px-4 py-2 text-sm text-white rounded-md bg-primary hover:bg-primary-dark focus:outline-none focus:ring focus:ring-primary-dark focus:ring-offset-1 focus:ring-offset-white dark:focus:ring-offset-dark"
      >
        <span aria-hidden="true">
          <AdjustmentsIcon className="w-4 h-4" />
        </span>
      </button>
    </div>
  );
}

export default SidebarButton;
