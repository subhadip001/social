import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./login.scss";

const Login = () => {

  const {login} = useContext(AuthContext)

  const handleLogin = () => {
    login()
  }

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
          <form action="" onSubmit={handleLogin}>
            <input type="text" name="" id="name" placeholder="Username" />
            <input type="password" name="" id="password" placeholder="Password" />

            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
