import Sidebar from "../components/Sidebar";
import TopBarDashboard from "../components/TopBarDashboard";

const MainLayout = ({ children }) => {
  return (
    <>
      <TopBarDashboard />
      <div className="d-flex">
        <Sidebar />
        <div className="flex-grow-1 p-3">{children}</div>
      </div>
    </>
  );
};

export default MainLayout;
