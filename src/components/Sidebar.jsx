import { BsSunFill } from "react-icons/bs";
import { GrTransaction } from "react-icons/gr";
import { MdOutlineCampaign } from "react-icons/md";
import { LuSquareActivity } from "react-icons/lu";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaBagShopping } from "react-icons/fa6";
import {
  BsHouseFill,
  BsGrid,
  BsGear,
  BsQuestionCircle,
  BsMoon,
  BsBoxArrowInRight,
} from "react-icons/bs";
import { useEffect, useState } from "react";
import logo from "../assets/logo-ecloth.png";
import { NavLink } from "react-router";

const Sidebar = () => {
  const [theme, setTheme] = useState("light");

  // Load saved theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-bs-theme", savedTheme);
  }, []);

  // Toggle theme when Mode button is clicked
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-bs-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 pb-5 pt-5 bg-body-tertiary"
      style={{ width: 200 }}
    >
      <img
        src={logo}
        alt="Logo"
        width={80}
        style={{
          marginLeft: "2rem",
          marginBottom: "1rem",
        }}
      />

      <hr />
      <ul className="nav nav-pills flex-column mb-4">
        <li className="nav-item">
          <NavLink
            to={"/dashboard"}
            className={({ isActive }) =>
              `nav-link  ${isActive ? "active" : "link-body-emphasis"}`
            }
            aria-current="page"
          >
            <BsHouseFill className="me-2" />
            Overview
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/products"}
            className={({ isActive }) =>
              `nav-link  ${isActive ? "active" : "link-body-emphasis"}`
            }
          >
            <FaBagShopping className="me-2" />
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/costumers"}
            className={({ isActive }) =>
              `nav-link  ${isActive ? "active" : "link-body-emphasis"}`
            }
          >
            <BsGrid className="me-2" />
            Customers
          </NavLink>
        </li>
        <li>
          <a href="#" className="nav-link link-body-emphasis">
            <MdOutlineCampaign className="me-2" />
            Campaign
          </a>
        </li>
        <li>
          <a href="#" className="nav-link link-body-emphasis">
            <LuSquareActivity className="me-2" />
            Log activity
          </a>
        </li>
        <li>
          <a href="#" className="nav-link link-body-emphasis">
            <GrTransaction className="me-2" />
            Transaction
          </a>
        </li>
        <li>
          <a href="#" className="nav-link link-body-emphasis">
            <BsGraphUpArrow className="me-2" />
            Statistics
          </a>
        </li>
      </ul>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <span className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
          <BsBoxArrowInRight size={20} className="me-2" />
          <span className="fs-6">Support</span>
        </span>
        <li>
          <a href="#" className="nav-link link-body-emphasis">
            <BsGear className="me-2" />
            Setting
          </a>
        </li>
        <li>
          <a href="#" className="nav-link link-body-emphasis">
            <BsQuestionCircle className="me-2" />
            Help
          </a>
        </li>
        <li>
          <button
            onClick={toggleTheme}
            className={`btn w-100 d-flex align-items-center justify-content-between px-3 py-2 rounded-3 shadow-sm ${
              theme === "dark" ? "btn-dark text-light" : "btn-light text-dark"
            }`}
            style={{ transition: "all 0.3s ease" }}
          >
            <span>
              {theme === "dark" ? (
                <BsMoon className="me-2" />
              ) : (
                <BsSunFill className="me-2" />
              )}
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
