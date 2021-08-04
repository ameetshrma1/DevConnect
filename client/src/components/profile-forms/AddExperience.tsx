import React, { Fragment, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addExperience } from "../../actions/profile";

interface IExperience {
  company: string;
  title: string;
  location: string;
  from: string;
  to?: string;
  current: boolean;
  description: string;
}

const AddExperience = ({ addExperience, history }: any) => {
  const initialData = {
    company: "",
    title: "",
    location: "",
    from: "",
    to: "",
    current: false,
    description: "",
  };
  const [formData, setFormData] = useState(initialData as IExperience);

  const [toDateDisabled, toggleDisabled] = useState(true);

  const { company, title, location, from, to, current, description } = formData;
  const onChange = (event: any) =>
    setFormData({ ...formData, [event.target.name]: event.target.value });

  const handleSubmit = (event: any) => {
    event.persist();
    addExperience(formData, history);
    console.log(formData);
  };

  return (
    <>
      <Fragment>
        <h1 className="large text-primary">Add An Experience</h1>
        <p className="lead">
          <i className="fas fa-code-branch"></i> Add any developer/programming
          positions that you have had in the past
        </p>
        <small>* = required field</small>
        <form className="form">
          <div className="form-group">
            <input
              type="text"
              placeholder="* Job Title"
              name="title"
              value={title}
              onChange={(event: any) => onChange(event)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="* Company"
              name="company"
              value={company}
              onChange={(event: any) => onChange(event)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Location"
              name="location"
              value={location}
              onChange={(event: any) => onChange(event)}
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
                }}
              />{" "}
              {""} Current Job
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
              placeholder="Job Description"
              value={description}
              onChange={(event: any) => onChange(event)}
              required
            ></textarea>
          </div>
        </form>

        <button className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </Fragment>
    </>
  );
};

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired,
};

export default connect(null, { addExperience })(AddExperience);
