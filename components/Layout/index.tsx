import Menu from './Menu';

function index({children}) {
  return (
    <div className="flex h-screen antialiased text-gray-900 bg-gray-100 dark:bg-dark dark:text-light bg-primary-darker">
      <aside className="flex-shrink-0 hidden w-64 bg-white border-r dark:border-primary-darker dark:bg-darker md:block">
        <div className="flex flex-col h-full">
          <Menu />
        </div>
      </aside>
      {children}
    </div>
  );
}

export default index;
