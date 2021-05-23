import Menu from './Menu';
import SidebarButton from './SidebarButton';

function Sidebar() {
  return (
    <aside className="flex-shrink-0 hidden w-16 bg-white border-r dark:border-primary-darker dark:bg-darker md:block">
      <div className="flex flex-col h-full">
        <Menu />
        <SidebarButton />
      </div>
    </aside>
  );
}

export default Sidebar;
