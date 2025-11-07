import style from "../css/Dashboard.module.css";
import profile from "../assets/profile.png";
import { MdAttachMoney, MdInventory } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { BiTransferAlt } from "react-icons/bi";
import { LuChartLine } from "react-icons/lu";
import { IoNotifications } from "react-icons/io5";
import Statistic from "../components/Statistic";
import OverViewProductCard from "../components/OverViewProductCard";

const Dashboard = () => {
  return (
    <>
      <div className={`${style.background}`}>
        <div className="row py-4">
          <div className="col-6">
            <h4>Dashboard</h4>
          </div>
          <div className="col-6">
            <div className={`${style.groupIcon}`}>
              <input type="search" placeholder="search anythings.." />
              <span className={`${style.notification} position-relative`}>
                <IoNotifications />
                <span
                  className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle"
                  style={{
                    fontSize: "0.65rem",
                    width: "1.25rem",
                    height: "1.25rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                  }}
                >
                  6
                </span>
              </span>
              <span>
                <img src={profile} alt="profile image" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <div className={`${style.dashboardCard}`}>
            <p>
              <span>
                <MdAttachMoney /> Total Revenue
              </span>
            </p>
            <p>
              <span className={style.numValue}>1000</span>
              <span className={style.growth}>
                <LuChartLine /> 3%
              </span>
            </p>
          </div>
        </div>
        <div className="col-3">
          <div className={style.dashboardCard}>
            <p>
              <span>
                <FaUsers /> Total Customer
              </span>
            </p>
            <p>
              <span className={style.numValue}>10000</span>
              <span className={style.costumer}>
                <LuChartLine /> 0.2%
              </span>
            </p>
          </div>
        </div>
        <div className="col-3">
          <div className={style.dashboardCard}>
            <p>
              <span>
                <BiTransferAlt /> Total Transaction
              </span>
            </p>
            <p>
              <span className={style.numValue}>340000</span>
              <span className={style.transaction}>
                <LuChartLine /> 9%
              </span>
            </p>
          </div>
        </div>
        <div className="col-3">
          <div className={style.dashboardCard}>
            <p>
              <span>
                <MdInventory /> Total Products
              </span>
            </p>
            <p>
              <span className={style.numValue}>500</span>
              <span className={style.product}>
                <LuChartLine /> 1%
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="row ms-2 mt-4">
        <div className={`col-6 ${style.costumOverviewStatistics}`}>
          <div className={`${style.costumRevenueGrowth}`}>
            <h6>Revenue Growth(NPR)</h6>
            <span>
              <a href="#">View more</a>
            </span>
          </div>
          <Statistic />
        </div>

        <div className={`col-6  ${style.costumOverviewStatistics} `}>
          <div className={`${style.costumRevenueGrowth}`}>
            <h6>Top Products</h6>
            <span>
              <a href="#">View more</a>
            </span>
          </div>
          <div className={`${style.costumOverviewTopProduct}`}>
            <OverViewProductCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
