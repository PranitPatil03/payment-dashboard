const OverView = () => {
  return (
    <>
      <div className="flex flex-col gap-10 px-6 py-3 mt-4">
        <div className="flex justify-between items-center">
          <p className="text-2xl font-bold font-mono">Overview</p>
          <div className="flex-none border border-lightGrey/95 rounded-md px-2 py-1 flex items-center">
            <span className="text-sm font-mono font-light">Last Month</span>
            <i className="fi fi-rr-angle-small-down text-base ml-1"></i>
          </div>
        </div>

        <div className="flex flex-col w-full md:flex-row gap-8 ">
          <div className="w-full md:w-1/2 flex flex-col border border-lightGrey/95 rounded-md px-5 py-5 gap-5 bg-white shadow-md">
            <h2 className="text-lg font-mono font-normal">Online orders</h2>
            <h1 className="text-4xl font-mono font-bold">231</h1>
          </div>
          <div className="w-full md:w-1/2 flex flex-col border border-lightGrey/95 rounded-md px-5 py-5 gap-5 bg-white shadow-md">
            <h2 className="text-lg font-mono font-normal">Amount received</h2>
            <h1 className="text-4xl font-mono font-bold">₹23,92,312.19</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default OverView;
