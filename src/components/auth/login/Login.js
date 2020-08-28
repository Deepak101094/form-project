import React from "react";
//?library import
import { Link, useHistory } from "react-router-dom";

const Login = () => {
  //this will give us history object
  const history = useHistory();
  return (
    <div>
      <>
        <div className="accountbg"></div>
        <div className="wrapper-page">
          <div className="card">
            <div className="card-body">
              {/* <h3 className="text-center m-0">
                <Link
                  to="/"
                  onClick={() => this.props.UpdateLoginAgain()}
                  className="logo logo-admin"
                >
                  <img src="assets/images/logo.png" height="30" alt="logo" />
                </Link>
              </h3> */}

              <div className="p-2">
                <h5 className="font-18 m-b-2 text-center">Welcome Back!</h5>
                <p className="text-muted text-center">
                  Sign up to continue to SkillsKhoj.
                </p>

                <form className="form-horizontal m-t-40" action="index.html">
                  <div className="form-group">
                    <label for="username">Username</label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      placeholder="Enter username"
                    />
                  </div>

                  <div className="form-group">
                    <label for="userpassword">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="userpassword"
                      placeholder="Enter password"
                    />
                  </div>

                  <div className="form-group row m-t-20">
                    <div className="col-12 text-right">
                      <button
                        className="btn btn-primary w-md waves-effect waves-light"
                        type="submit"
                      >
                        Sign In
                      </button>
                    </div>
                  </div>

                  <div className="form-group m-t-10 mb-0 row">
                    <div className="col-12 m-t-20">
                      <p className="font-14 text-muted mb-0">
                        By registering you agree to the Admiria{" "}
                        {/*<Link to="#">Terms of Use</Link> */}
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="m-t-40 text-center">
            <p className="text-white">
              Don't have an account ?{" "}
              <Link
                //to="/signup"
                onClick={() => history.push("/signup")}
                className="font-500 font-14 text-white font-secondary"
              >
                {" "}
                SignUp{" "}
              </Link>{" "}
            </p>
            <p className="text-white">
              © {new Date().getFullYear()} SkillsKhoj. All Rights Reserved.{" "}
              <i className="mdi mdi-heart text-danger"></i> by Themesbrand
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Login;
