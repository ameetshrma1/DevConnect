import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { cancelAlert } from "../../actions/alert";

interface IAlert {
  id: string;
  msg: string;
  alertType: string;
}

const Alert = ({ alerts, cancelAlert }: any) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert: IAlert) => (
    <div className="alert-wrapper">
      <div key={alert.id} className={`alert alert-${alert.alertType}`}>
        <span className="msg">{alert.msg}</span>
        <button className="mybtn" onClick={() => cancelAlert(alert.id)}>
          <i className="fas fa-times"></i>
        </button>
      </div>
    </div>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

Alert.propTypes = {
  cancelAlert: PropTypes.func.isRequired,
};

const mapStateToProps = (state: any) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps, { cancelAlert })(Alert);
