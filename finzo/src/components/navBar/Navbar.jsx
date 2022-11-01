import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { DarkModeContext } from "../../context/darkModeContext";
import "./navbar.scss";

const Navbar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const {login , currUser} = useContext(AuthContext)

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>finzo</span>
        </Link>
        <i className="fi fi-rr-home"></i>
        {!darkMode ? (
          <i className="fi fi-rr-moon" style={{transform : "rotate(-30deg)"}} onClick={toggle}></i>
        ) : (
          <i className="fi fi-rr-sun" onClick={toggle}></i>
        )}
        <i className="fi fi-rr-grid"></i>
        <div className="search">
          <i className="fi fi-rr-search"></i>
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <i className="fi fi-rr-user"></i>
        <i className="fi mobile-hide fi-rr-comment"></i>
        <i className="fi mobile-hide fi-rr-bell"></i>
        <div className="user">
          <img
            src={currUser.dp}
            alt="pp"
          />
          <span>{currUser.userName}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
