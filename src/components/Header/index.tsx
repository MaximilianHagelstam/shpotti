import NavItem from "./NavItem";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap py-16 px-8">
      <div className="flex items-center flex-shrink-0 mr-6">
        <span className="font-semibold text-2xl tracking-tight">Shpotti</span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <NavItem title="My Spots" link="my-spots" />
        </div>
        <SearchBar />
      </div>
    </nav>
  );
};

export default Header;
