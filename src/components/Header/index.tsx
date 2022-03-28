import NavItem from "./NavItem";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <nav className="flex items-center justify-between py-16 px-8 flex-col lg:flex-row md:flex-row">
      <span className="font-semibold text-2xl">Shpotti</span>
      <div className="flex flex-grow w-auto items-center text-sm pt-4 lg:pt-0 md:pt-0">
        <div className="flex-grow" />
        <NavItem title="My Spots" link="my-spots" />
        <SearchBar />
      </div>
    </nav>
  );
};

export default Header;
