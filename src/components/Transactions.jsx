import { data } from "autoprefixer";
import { tableData } from "../common/data";

const Transactions = () => {
  return (
    <>
      <div className="flex flex-col gap-10 px-6 py-3 mt-2">
        <p className="text-[25px] font-bold font-mono">
          Transactions | This Month
        </p>
        <div className="flex flex-col justify-between px-3 py-2 border border-lightGrey/95 rounded-md overflow-scroll">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row">
              <div className="relative md:w-[170px] lg:w-[250px]">
                <input
                  type="text"
                  name="searchbar"
                  placeholder="Search by order ID..."
                  className="text-gray-500 p-2 py-2 pl-8 pr-2 w-full outline-none text-[16px] border border-lightGrey/95 rounded-md "
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
            </div>
            <div className="flex flex-row gap-5">
              <div className="border border-lightGrey/95 rounded-md px-3 py-1 flex items-center">
                <span className="text-base font-mono font-light">Sort</span>
                <i className="fi fi-rr-sort-alt text-sm ml-1"></i>
              </div>
              <div className="flex-none border border-lightGrey/95 rounded-md flex items-center">
                <i className="fi fi-rr-download text-base px-3"></i>
              </div>
            </div>
          </div>

          <div className="mt-4 rounded-md font-mono">
            <div className="flex justify-between p-1 bg-[#F2F2F2] px-3">
              <div className="flex gap-80 justify-between font-semibold">
                <h1>Order ID</h1>
                <span className="flex flex-row relative gap-2">
                  <h1 className="mr-5 relative">Order date</h1>
                  <i className="absolute fi fi-rr-sort-down text-sm top-1/2 right-0 transform -translate-y-1/2 mt-1"></i>
                </span>
              </div>
              <div className="flex gap-[18rem] justify-between font-semibold">
                <h1>Order amount</h1>
                <span className="flex flex-row relative gap-2">
                  <h1 className="mr-5 relative">Transaction fees</h1>
                  <i className="absolute fi fi-rr-info text-sm top-1/2 right-0 transform -translate-y-1/2 mt-1"></i>
                </span>
              </div>
            </div>

            <div>
              {tableData.map((data, i) => {
                return (
                  <>
                    <div key={i}>
                      <div className="flex justify-between p-1 px-3 my-2">
                        <div className="flex gap-80 justify-between">
                          <h1 className="text-orderIdColor font-medium">
                            {data.orderId}
                          </h1>
                          <span className="flex flex-row relative gap-2">
                            <h1 className="ml-2 relative">{data.date}</h1>
                          </span>
                        </div>
                        <div className="flex gap-[26rem] justify-between">
                          <h1>{data.orderAmount}</h1>
                          <span className="flex flex-row  gap-2">
                            <h1 className=" relative">{data.fee}</h1>
                          </span>
                        </div>
                      </div>
                      <div className="flex-none border border-b border-lightGrey/95"></div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transactions;
