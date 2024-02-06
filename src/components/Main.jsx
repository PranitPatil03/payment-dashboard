import Header from "./Header";
import OverView from "./OverView";

const Main = () => {
  return (
    <div className="flex flex-col h-screen flex-[0.9] max-md:flex-1">
      <Header></Header>
      <OverView></OverView>
    </div>
  );
};

export default Main;
