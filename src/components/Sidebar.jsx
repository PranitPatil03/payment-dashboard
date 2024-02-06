import SidebarImage from "../assets/SidebarImage.png";
import { options } from "../common/data";

const Sidebar = () => {
  return (
    <div className="flex flex-col h-screen flex-[0.15] max-md:hidden bg-sidebarBg px-5 py-3">
      <div className="relative flex gap-6">
        <div className="">
          <img src={SidebarImage} className="h-14 w-14 rounded-xl" />
        </div>
        <div>
          <h3 className="text-lg text-white font-medium font-mono">Nishyan</h3>
          <p className="text-base text-white underline font-light font-mono ">
            Visit store
          </p>
        </div>
        <div className="relative">
          <i className="fi fi-rr-angle-small-down text-white text-2xl absolute left-16 top-1/2 -translate-y-1/2"></i>
        </div>
      </div>

      <div className="mt-10 font-mono gap-3">
        {options.map((option, i) => {
          return (
            <div
              key={i}
              className={
                "flex flex-row gap-3 items-center px-6 py-2 hover:bg-optionsBg hover:rounded-lg "
              }
            >
              <i
                className={
                  "fi fi-rr-" + option.icon + " text-white text-2xl mt-2 "
                }
              ></i>
              <p className="text-white text-xl mt-1 font-light">
                {option.name}
              </p>
            </div>
          );
        })}
      </div>

      <div className=""></div>
    </div>
  );
};

export default Sidebar;
