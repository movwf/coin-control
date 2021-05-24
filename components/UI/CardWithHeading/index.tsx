interface ICardWithHeading {
  children: JSX.Element;
  title: string;
}

function index({ children, title }: ICardWithHeading) {
  return (
    <div className="h-full bg-white rounded-md dark:bg-darker">
      <div className="p-4 border-b dark:border-primary">
        <h4 className="text-lg font-semibold text-gray-500 dark:text-light">
          {title}
        </h4>
      </div>
      <p className="p-4">{children}</p>
    </div>
  );
}

export default index;
