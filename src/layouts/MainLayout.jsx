import Sidebar from "../components/Sidebar";
import TopBarDashboard from "../components/TopBarDashboard";
import "../css/MainLayout.css";

const MainLayout = ({ children }) => {
  return (
    <>
      <TopBarDashboard />
      <div className="main-layout d-flex">
        <div className="sidebar-fixed">
          <Sidebar />
        </div>
        <div className="content-scroll flex-grow-1 p-3">{children}</div>
      </div>
    </>
  );
};

export default MainLayout;
