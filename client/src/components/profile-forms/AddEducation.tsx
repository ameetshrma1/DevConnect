import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addEducation } from "../../actions/profile";
import { Link } from "react-router-dom";

interface IEducation {
  school: string;
  degree: string;
  fieldofstudy: string;
  from: string;
  to?: string;
  current: boolean;
  description: string;
}

const AddEducation = ({ addEducation, history }: any) => {
  const initialData = {
    school: "",
    degree: "",
    fieldofstudy: "",
    from: "",
    to: "",
    current: false,
    description: "",
  };
  const [formData, setFormData] = useState(initialData as IEducation);

  const [toDateDisabled, toggleDisabled] = useState(true);

  const { school, degree, fieldofstudy, from, to, current, description } =
    formData;
  const onChange = (event: any) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log(formData);
  };

  const handleSubmit = (event: any) => {
    event.persist();
    addEducation(formData, history);
  };

  return (
    <>
      <Fragment>
        <h1 className="large text-primary">Add Your Education</h1>
        <p className="lead">
          <i className="fas fa-graduation-cap"></i> Add any school, bootcamp,
          etc that you have attended
        </p>
        <small>* = required field</small>
        <form className="form">
          <div className="form-group">
            <input
              type="text"
              placeholder="* School or Bootcamp"
              name="school"
              value={school}
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="* Degree or Certificate"
              name="degree"
              value={degree}
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Field Of Study"
              name="fieldofstudy"
              value={fieldofstudy}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <h4>From Date</h4>
            <input
              type="date"
              name="from"
              value={from}
              onChange={(event: any) => onChange(event)}
            />
          </div>
          <div className="form-group">
            <p>
              <input
                type="checkbox"
                name="current"
                onClick={() => {
                  toggleDisabled(!toDateDisabled);
                  setFormData({ ...formData, current: !current });
                }}
              />{" "}
              Current School or Bootcamp
            </p>
          </div>
          {toDateDisabled && (
            <div className="form-group">
              <h4>To Date</h4>
              <input
                type="date"
                name="to"
                value={to}
                onChange={(event: any) => onChange(event)}
              />
            </div>
          )}
          <div className="form-group">
            <textarea
              name="description"
              // cols="30"
              // rows="5"
              placeholder="Program Description"
              value={description}
              onChange={onChange}
            ></textarea>
          </div>
        </form>

        <button className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>

        <Link to="/dashboard" className="btn btn-light my-1">
          Go Back
        </Link>
      </Fragment>
    </>
  );
};

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired,
};

export default connect(null, { addEducation })(AddEducation);
