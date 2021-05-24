import Badge from "./Badge";
import BadgeLayer from "./BadgeLayer";

interface ICardWithHeadingAndBadge {
  children: JSX.Element;
  title: string;
  badgeLabel: string;
  badgeInnerText: string;
}

function index({
  children,
  title,
  badgeLabel,
  badgeInnerText,
}: ICardWithHeadingAndBadge) {
  return (
    <div className="h-full bg-white rounded-md dark:bg-darker">
      <div className="flex items-center justify-between p-4 border-b dark:border-primary">
        <h4 className="text-lg font-semibold text-gray-500 dark:text-light">
          {title}
        </h4>
        <div className="flex items-center space-x-2">
          <BadgeLayer innerText={badgeLabel} />
          <Badge innerText={badgeInnerText} />
        </div>
      </div>
      <div className="relative p-4 h-72">{children}</div>
    </div>
  );
}

export default index;
