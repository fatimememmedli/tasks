import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.scss";
function Navbar() {
  return (
    <div className="section">
      <div className="navbar">
        <div className="dashboard">
          <div className="logo">
            <FontAwesomeIcon icon={faChartLine} style={{ color: "#ffffff" }} />
          </div>
          <p>DASHBOARD</p>
        </div>
        <div className="users">
          <div className="logo">
            <FontAwesomeIcon icon={faUsers} style={{ color: "#ffffff" }} />
          </div>
          <p>USERS</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
