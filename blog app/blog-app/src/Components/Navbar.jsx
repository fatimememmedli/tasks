import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import style from "./../Components/Navbar.module.css";
function Navbar() {
  return (
    <>
      <div className={style.container}>
        <nav>
          <ul className={style.links}>
            <Link to="/blogs">Blogs</Link>
            <Link to="/">Blog Created</Link>
          </ul>
        </nav>
      </div>

      <Outlet />
    </>
  );
}

export default Navbar;
