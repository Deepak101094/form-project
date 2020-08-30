import React from "react";
import "./style.scss";
//? library import
import { Link, useHistory } from "react-router-dom";

const UserRegistration = () => {
  //this will give us history object
  const history = useHistory();
  return (
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
              <h5 className="font-18 m-b-2 text-center">
                {" "}
                Enterprise User Registration
              </h5>
              <p className="text-muted text-center">
                Please fill up all fields to continue to SkillsKhoj.
              </p>

              <form className="form-horizontal m-t-40" action="index.html">
                <div className="form-group">
                  <label for="companyname">Company Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="companyname"
                    placeholder="Enter Company Name"
                  />
                </div>

                <div className="form-group">
                  <label for="projectname">
                    Project / Regional Office Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="projectname"
                    placeholder="Enter Company Name"
                  />
                </div>

                <div className="form-group">
                  <label for="spocname">
                    SPOC Name ( Single Point Of Contact for company )
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="spocname"
                    placeholder="Enter SPOC Name"
                  />
                </div>

                <div className="form-group">
                  <label for="sponcontact">SPOC Contact Number</label>
                  <input
                    type="number"
                    className="form-control"
                    id="sponcontact"
                    placeholder="Enter SPOC Contact Number"
                  />
                </div>

                <div className="form-group">
                  <label for="spocmailId">SPOC Mail ID</label>
                  <input
                    type="email"
                    className="form-control"
                    id="spocmailId"
                    placeholder="Enter SPOC Mail ID"
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
                      className="btn btn-warning w-md waves-effect waves-light"
                      type="submit"
                      onClick={() => history.push("/user_otp_page")}
                    >
                      Next
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
            Already have an account ?{" "}
            {/*  <Link
            to="pages_login"
            className="font-500 font-14 text-white font-secondary"
          >
            {" "}
            Login{" "}
          </Link>{" "}*/}
          </p>
          <p className="text-white">
            © {new Date().getFullYear()} SkillsKhoj. All Rights Reserved.{" "}
            <i className="mdi mdi-heart text-danger"></i> by Themesbrand
          </p>
        </div>
      </div>
    </>
  );
};

export default UserRegistration;
