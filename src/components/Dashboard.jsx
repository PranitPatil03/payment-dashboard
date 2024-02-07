import Main from "./Main";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <>
      <div className="flex flex-row h-screen">
        <Sidebar></Sidebar>
        <Main></Main>
      </div>
    </>
  );
};

export default Dashboard;
