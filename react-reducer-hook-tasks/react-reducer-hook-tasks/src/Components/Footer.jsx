import React from "react";
import style from "../assets/style/Footer.module.css";
function Footer() {
  return (
    <div className={style.container}>
      <h3>Footer</h3>
      <span>Something here to give the footer a purpose!</span>
      <span>
        Copyright © <a href="">Your Website</a> 2023.
      </span>
    </div>
  );
}

export default Footer;
