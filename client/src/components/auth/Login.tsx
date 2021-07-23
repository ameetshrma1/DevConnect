import React, { Fragment, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

interface IFormdata {
  email: string;
  password: string;
}

const Login = () => {
  const initialData: IFormdata = {
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialData as IFormdata);

  const { email, password } = formData;

  const handleChange = (event: any) => {
    event.persist();
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async () => {
    console.log("SUCCESS");
  };

  return (
    <Fragment>
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Sign Into Your Account
      </p>
      <form className="form">
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleChange}
            required
            // minLength="6"
          />
        </div>
      </form>
      <button className="btn btn-primary" onClick={handleSubmit}>
        Login
      </button>

      <p className="my-1">
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
    </Fragment>
  );
};

export default Login;
