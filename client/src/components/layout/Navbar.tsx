import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

const Navbar = ({
  auth: { isAuthenticated, loading, user },
  logout,
  profile: { profile },
}: any) => {
  const authLinks = (
    <ul>
      <li>
        <Link to="/profiles">
          <i className="fas fa-users"></i> Developers
        </Link>
      </li>
      <li>
        <Link to="/posts">
          <i className="far fa-sticky-note"></i> Posts
        </Link>
      </li>
      <li>
        <Link to="/dashboard">
          <i className="fas fa-chalkboard-teacher"></i>
          <span className="hide-sm"> Dashboard</span>
        </Link>
      </li>
      {profile !== null && (
        <li>
          <Link to={user && `/profile/${user._id}`}>
            <i className="fas fa-user" />
            <span className="hide-sm"> My Profile</span>
          </Link>
        </li>
      )}

      <li>
        <Link onClick={logout} to="/login">
          <i className="fas fa-sign-out-alt" /> Logout
        </Link>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to="/profiles">
          <i className="fas fa-users"></i> Developers
        </Link>
      </li>
      <li>
        <Link to="/register">
          <i className="fas fa-user-plus"></i> Register
        </Link>
      </li>
      <li>
        <Link to="/login">
          <i className="fas fa-sign-in-alt"></i> Login
        </Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="fab fa-free-code-camp"></i> Code Community
        </Link>
      </h1>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state: any) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { logout })(Navbar);
