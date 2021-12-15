import React from "react";
import { navbar } from "../Css/Navbar.module.css";
const Navbar = (props) => {
  return (
    <header className={navbar}>
      <h3>Navbar</h3>
      <span> Card Items: {props.total_Items}</span>
    </header>
  );
};

export default Navbar;
