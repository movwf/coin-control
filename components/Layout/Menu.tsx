import MenuItem from './MenuItem';

function Menu() {
  return (
    <nav
      aria-label="Main"
      className="flex-1 px-2 py-4 space-y-2 overflow-y-hidden hover:overflow-y-auto"
    >
      <ul className="list-none">
        <MenuItem name="Home" icon="home" href="/" />
      </ul>
    </nav>
  );
}

export default Menu;
