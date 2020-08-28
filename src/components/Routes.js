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
import LogIn from "../components/auth/login/Login";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/signup" component={SignUp} />
        <Route exact={true} path="/" component={LogIn} />
      </Switch>
    </Router>
  );
};

export default Routes;
