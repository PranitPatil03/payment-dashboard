import help from "../assets/Help.png";
import group from "../assets/Group.png";
import menu from "../assets/Menu.svg";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-6 py-3 shadow-sm border-b z-1">
      <div className="flex gap-3 md:gap-5 items-center">
        <button className="sm:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        <h1 className="text-xl text-black font-semibold">Payouts</h1>
        <div className="flex gap-1 items-center">
          <img src={help} className="w-4 h-4 text-current" />
          <p className="hidden md:block text-sm font-normal text-current">
            How it works
          </p>
        </div>
      </div>
      <div className="relative md:w-[300px] lg:w-[500px]">
        <input
          type="text"
          name="searchbar"
          placeholder="Search features, tutorials, etc."
          className="text-gray-500 p-2 py-2 pl-8 pr-2 w-full outline-none bg-[rgb(243,242,243)] rounded-md text-[16px]"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4 absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </div>

      <div className="flex gap-5 items-center">
        <div className="flex gap-2">
          <img src={group} />
          <img src={menu} />
        </div>
      </div>
    </div>
  );
};

export default Header;
