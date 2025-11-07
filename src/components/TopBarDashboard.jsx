import style from "../css/Dashboard.module.css";
import { FaCircle } from "react-icons/fa";
import { PiSidebarBold } from "react-icons/pi";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaLock } from "react-icons/fa";
import { BiSolidCloudUpload } from "react-icons/bi";
import { IoCopyOutline } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
const TopBarDashboard = () => {
  return (
    <div className="container-fluid pt-3">
      <div className="row">
        <div className="col-3 d-flex">
          <div className="d-flex gap-2 align-items-center">
            <FaCircle style={{ color: "orange" }} />
            <FaCircle style={{ color: "#c4aa2aff" }} />
            <FaCircle style={{ color: "green" }} />
            <PiSidebarBold
              style={{ fontSize: "1.6rem", marginLeft: "0.7rem" }}
            />
          </div>
          <span className="d-flex gap-2 align-items-center ms-4 fs-5">
            <IoIosArrowBack />
            <IoIosArrowForward />
          </span>
        </div>
        <div className="col-6">
          <div
            className={`alert alert-dark text-center d-flex align-items-center justify-content-center gap-2 ${style.costumAlert}`}
            role="alert"
          >
            <FaLock />
            dashboard.io
          </div>
        </div>
        <div className="col-3">
          <div className={`${style.topIconGroup}`}>
            <BiSolidCloudUpload />
            <IoMdAdd />
            <IoCopyOutline />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TopBarDashboard;
