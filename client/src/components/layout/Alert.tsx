import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

interface IAlert {
  id: string;
  msg: string;
  alertTypes: string;
}

const Alert = ({ alerts }: any) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert: IAlert) => (
    <div key={alert.id} className={`alert alert-${alert.alertTypes}`}>
      {alert.msg}
    </div>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state: any) => ({
  alerts: state.alert,
});

export default connect()(Alert);
