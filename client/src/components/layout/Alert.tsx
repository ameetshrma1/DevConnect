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
    <div key={alert.id} className={`alert alert-${alert.alertType}`}>
      {alert.msg}
      <button className="mybtn" onClick={() => cancelAlert(alert.id)}>
        X
      </button>
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
