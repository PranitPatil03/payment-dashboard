import SidebarImage from "../assets/SidebarImage.png";
import { options } from "../common/data";

const Sidebar = () => {
  return (
    <div className="flex flex-col h-screen flex-[0.1] max-md:hidden bg-sidebarBg px-5 py-3 justify-between">
      <div className="relative flex gap-6">
        <div className=" bg-white w-[39px] h-[39px] m-[0.5px] rounded-[4px] relative">
          <img src={SidebarImage} className="object-cover object-center" />
        </div>
        <div>
          <h3 className="text-base text-white font-medium font-mono">
            Nishyan
          </h3>
          <p className="text-sm text-white underline font-light font-mono ">
            Visit store
          </p>
        </div>
        <div className="relative">
          <i className="fi fi-rr-angle-small-down text-white text-2xl absolute right-[-15px] top-1/2 -translate-y-1/2"></i>
        </div>
      </div>

      <div className="font-mono gap-3 mt-[-4rem] 2xl:mt-[-8rem]">
        {options.map((option, i) => {
          return (
            <div
              key={i}
              className={`${
                option.name == "Payments" ? "rounded-lg" : ""
              } flex flex-row gap-3 items-center px-4 py-2 hover:bg-optionsBg hover:rounded-lg`}
            >
              <i
                className={`fi fi-rr-${option.icon} text-white text-xl mt-2`}
              ></i>
              <p className="text-white text-base mt-1 font-light">
                {option.name}
              </p>
            </div>
          );
        })}
      </div>

      <div className="py-[6px] px-3 bg-[#353C53] mx-2 rounded">
        <div className="flex gap-3 items-center">
          <div className="w-9 h-9 bg-[#FFFFFF]/10 rounded p-[6px] flex justify-center items-center">
            <i
              className="fi fi-rr-wallet text-white text-xl my-4 mx-3"
              width={23.65}
              height={19.6}
            ></i>
          </div>
          <div className="flex flex-col text-white gap-[2px]">
            <h3 className="text-[13px] text-[#FFFFFF] font-light">
              Available Credits
            </h3>
            <h6 className="text-base font-medium">224.10</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
