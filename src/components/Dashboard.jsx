import Main from "./Main"
import Sidebar from "./Sidebar"

const Dashboard = () => {
  return (
    <>
    
      <div className="flex flex-row border">
        <Sidebar></Sidebar>
        <Main></Main>
      </div>
      
    </>
  )
}

export default Dashboard
