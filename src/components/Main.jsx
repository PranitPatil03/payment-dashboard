import Header from "./Header";
import OverView from "./OverView";
import Transactions from "./Transactions";

const Main = () => {
  return (
    <div className="flex flex-col  h-screen flex-[0.9] max-md:flex-1 ">
      <Header></Header>
      <OverView></OverView>
      <Transactions></Transactions>
    </div>
  );
};

export default Main;
