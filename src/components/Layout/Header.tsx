import { FiSearch } from "react-icons/fi";

const Header = () => {
  return (
    <nav className="flex items-center justify-between py-16 px-8 flex-col lg:flex-row md:flex-row">
      <span className="font-semibold text-2xl">Shpotti</span>
      <div className="flex flex-grow w-auto items-center text-sm pt-4 lg:pt-0 md:pt-0">
        <div className="flex-grow" />
        <a className="mr-4" href="/my-spots">
          My Spots
        </a>

        <div className="flex border max-w-[10rem] text-sm">
          <input
            className="w-full text-gray-700 px-2 focus:outline-none"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="text-white bg-black p-2" type="button">
            <FiSearch size={16} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
