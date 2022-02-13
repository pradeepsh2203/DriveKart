import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Landing from "../pages/Landing.js";

import LoginDriver from "../pages/Driver/LoginDriver";
import LoginOtpDriver from "../pages/Driver/LoginOtpDriver";
import SignupDriver from "../pages/Driver/SignupDriver.js";
import DriverDashboard from "../pages/Driver/DashboardDriver";

import LoginDealer from "../pages/Dealer/LoginDealer";
import LoginOtpDealer from "../pages/Dealer/LoginOtpDealer";
import SignupDealer from "../pages/Dealer/SignupDealer.js";
import DealerDashboardHome from "../pages/Dealer/DashboardDealerHome";
import DealerDashboardSearch from "../pages/Dealer/DashboardDealerSearch";

class House extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />

          <Route path="/driver/login" exact element={<LoginDriver />} />
          <Route path="/driver/loginotp" exact element={<LoginOtpDriver />} />
          <Route path="/driver/signup" exact element={<SignupDriver />} />
          <Route path="/driver/dashboard" exact element={<DriverDashboard />} />

          <Route path="/dealer/login" exact element={<LoginDealer />} />
          <Route path="/dealer/loginotp" exact element={<LoginOtpDealer />} />
          <Route path="/dealer/signup" exact element={<SignupDealer />} />
          <Route
            path="/dealer/dashboard/home"
            exact
            element={<DealerDashboardHome />}
          />
          <Route
            path="/dealer/dashboard/search"
            exact
            element={<DealerDashboardSearch />}
          />
        </Routes>
      </Router>
    );
  }
}

export default House;
