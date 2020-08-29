import React from "react";
//?library import
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
//? components import
import SignUp from "../components/auth/signUp/Signup";
import LogIn from "../components/auth/login";
import UserRegistration from "../components/auth/userRegistration/UserRegistration";
import UserOtpPage from "../components/auth/userOtp";
import Layout from "../hoc/Layout";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Layout>
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
