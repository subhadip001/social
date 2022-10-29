import React from "react";
import { Link } from "react-router-dom";
import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello Peeps.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam ipsam
            libero beatae fugiat quisquam voluptate minus incidunt quae deserunt
            accusantium?
          </p>
          <span>Don't have an Account</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form action="">
            <input type="text" name="" id="" placeholder="Username" />
            <input type="password" name="" id="" placeholder="Password" />

            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
