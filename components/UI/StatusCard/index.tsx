import {
  CurrencyDollarIcon,
  TrendingUpIcon,
  TrendingDownIcon,
  TicketIcon,
  UsersIcon,
} from "@heroicons/react/outline";

const IconProps = "w-12 h-12 text-gray-300 dark:text-primary-dark";
const Icons = {
  dollar: <CurrencyDollarIcon className={IconProps} />,
  "trending-up": <TrendingUpIcon className={IconProps} />,
  "trending-down": <TrendingDownIcon className={IconProps} />,
  ticket: <TicketIcon className={IconProps} />,
  users: <UsersIcon className={IconProps} />,
};

interface IStatusCard {
  title: string;
  values: number[];
  icon: string;
  format: string;
}

const Formats = {
  "currency-dollar": "$",
};

function index({ title, values, icon, format }: IStatusCard) {
  const diff =
    values?.length > 1
      ? (values[values.length - 1] - values[values.length - 2]) / 100
      : 0;
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-md dark:bg-darker">
      <div>
        <h6 className="text-xs font-medium leading-none tracking-wider text-gray-500 uppercase dark:text-primary-light">
          {title}
        </h6>
        <span className="text-xl font-semibold">
          {(Formats[format] || "") +
            values?.[values?.length - 1].toLocaleString(undefined)}
        </span>
        <span
          className={`inline-block px-2 py-px ml-2 text-xs text-${
            diff > 0 ? "green" : "red"
          }-500 bg-${diff > 0 ? "green" : "red"}-100 rounded-md`}
        >
          {diff.toLocaleString(undefined, { minimumFractionDigits: 1 }) + "%"}
        </span>
      </div>
      <div>
        <span>{Icons?.[icon]}</span>
      </div>
    </div>
  );
}

export default index;
