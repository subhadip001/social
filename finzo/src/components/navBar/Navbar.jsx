import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>finzo</span>
        </Link>
        <i class="fi fi-rr-home"></i>
        <i class="fi fi-rr-moon"></i>
        <i class="fi fi-rr-grid"></i>
        <div className="search">
          <i class="fi fi-rr-search"></i>
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <i class="fi fi-rr-user"></i>
        <i class="fi fi-rr-comment"></i>
        <i class="fi fi-rr-bell"></i>
        <div className="user">
          <img
            src="https://randomuser.me/api/portraits/women/20.jpg"
            alt="pp"
          />
          <span>John Doe</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
