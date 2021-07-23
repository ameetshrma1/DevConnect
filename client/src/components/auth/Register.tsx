import React, { Fragment, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";

import PropTypes from "prop-types";

interface IFormdata {
  name: string;
  email: string;
  password: string;
  password2: string;
}

const Register = ({ setAlert }: any) => {
  const initialData: IFormdata = {
    name: "",
    email: "",
    password: "",
    password2: "",
  };
  const [formData, setFormData] = useState(initialData as IFormdata);

  const { name, email, password, password2 } = formData;

  const handleChange = (event: any) => {
    event.persist();
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async () => {
    if (password !== password2) {
      setAlert("Password Do not Match", "danger");
    } else {
      console.log("SUCCESS");
    }
  };

  return (
    <Fragment>
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Create Your Account
      </p>
      <form className="form">
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />
        </div>
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
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={password2}
            onChange={handleChange}
            // minLength="6"
          />
        </div>
      </form>
      <button className="btn btn-primary" onClick={handleSubmit}>
        Register
      </button>
      <p className="my-1">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
};

export default connect(null, { setAlert })(Register);
