import React, { useState } from "react";
import { FaExternalLinkAlt, FaBars } from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./NavBar.css";
import { IconContext } from "react-icons";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../firebase/context";
import logo from "../../assets/Rey-Diaz-Logo-White.png";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const history = useHistory();
  const { logout } = useAuth();

  const [error, setError] = useState("");

  async function handleLogout(e) {
    e.preventDefault();
    setError("");

    try {
      await logout();
      history.push("/sign-in");
    } catch {
      setError("Failed to log out");
    }
  }
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div
          style={{ display: "flex", justifyContent: "space-between" }}
          className="navbar"
        >
          <Link to="/" className="menu-bars">
            <img
              src={logo}
              alt="logo"
              width={100}
              height={100}
              style={{ width: "250px", height: "50px" }}
            />
          </Link>
          <Link to="#" className="menu-bars">
            <FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <li
            style={{
              position: "absolute",
              display: "flex",
              top: "50%",
              paddingRight: "36px",
            }}
          >
            <Link
              onClick={handleLogout}
              style={{ textDecoration: "none", color: "#f5f5f5" }}
            >
              <FaExternalLinkAlt style={{ marginRight: "10px" }} size={24} />{" "}
              Log out
            </Link>
          </li>
          {error}
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
