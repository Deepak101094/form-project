import React from "react";
//?library import
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
//? components import
import SignUp from "../components/auth/superEnterPriseUser/Signup";
import LogIn from "../components/auth/superEnterPriseUser/LogIn";
import UserRegistration from "../components/auth/superEnterPriseUser/UserRegistration";
import UserOtpPage from "../components/auth/superEnterPriseUser/UserOTP";
import UserRegistrationDetail from "../components/auth/superEnterPriseUser/UserRegistrationDetail";
import Layout from "../hoc/Layout";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Layout>
          <Route
            exact={true}
            path="/user_detail"
            component={UserRegistrationDetail}
          />
          <Route exact={true} path="/user_otp_page" component={UserOtpPage} />
          <Route
            exact={true}
            path="/user_registration"
            component={UserRegistration}
          />
          <Route exact={true} path="/signup" component={SignUp} />
          <Route exact={true} path="/" component={LogIn} />
        </Layout>
      </Switch>
    </Router>
  );
};

export default Routes;
