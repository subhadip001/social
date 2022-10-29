import React from "react";
import { Link } from "react-router-dom";
import "./register.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Finzo Social</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam ipsam
            libero beatae fugiat quisquam voluptate minus incidunt quae deserunt
            accusantium?
          </p>
          <span>Do you have an Account</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form action="">
            <input type="text" name="" id="" placeholder="Name" />
            <input type="eamil" name="" id="" placeholder="Email" />
            <input type="password" name="" id="" placeholder="Password" />
            <input type="text" name="" id="" placeholder="Confirm password" />

            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
