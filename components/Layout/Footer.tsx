import { memo } from "react";

function Footer() {
  return (
    <footer className="flex items-center justify-between p-4 bg-white border-t dark:bg-darker dark:border-primary-darker">
      <div>Coin-Control &copy; 2021</div>
      <div className="text-xs">
        Github
        <a
          href="https://github.com/movwf"
          target="_blank"
          className="text-blue-500 hover:underline"
        >
          &nbsp;@movwf
        </a>
      </div>
    </footer>
  );
}

export default memo(Footer);
