import React from "react";
import "./style.scss";
//? library import
import { Link, useHistory } from "react-router-dom";
import Select from "react-select";

const UserRegistrationDetail = () => {
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
                  <label for="adharnumber">Aadhar Number Of SPOC</label>
                  <input
                    type="text"
                    className="form-control"
                    id="adharnumber"
                    placeholder="Enter Aadhar Number"
                  />
                </div>

                <div className="form-group">
                  <label for="pannumber">
                    PAN Number Of Project / Regional Office
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="pannumber"
                    placeholder="Enter PAN Number"
                  />
                </div>

                <div className="form-group">
                  <label for="gstnumber">
                    GST Number Of Project / Regional Office
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="gstnumber"
                    placeholder="Enter GST Number"
                  />
                </div>

                <div className="form-group">
                  <label for="sponcontact">
                    Select Categories Of Workmen Required For Your Company
                  </label>
                  <Select
                  // value={selectedOption}
                  // onChange={this.handleChange}
                  // options={options}
                  />
                </div>

                <div className="form-group">
                  <label for="sponcontact">
                    Select Area/State Where The Workmen Are Required
                  </label>
                  <Select
                  // value={selectedOption}
                  // onChange={this.handleChange}
                  // options={options}
                  />
                </div>

                <div className="form-group">
                  <label for="workmen">
                    Tentative Number Of Workmen Required Per Month
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="workmen"
                    placeholder="Enter Number Of Workmen(approx)"
                  />
                </div>

                <div className="form-group">
                  <label for="workmen">Upload GST Certificate</label>
                  <div className="custom-file">
                    <input
                      type="file"
                      className="form-control"
                      id="inputGroupFile01"
                      aria-describedby="inputGroupFileAddon01"
                    />
                    <label
                      className="custom-file-label"
                      htmlFor="inputGroupFile01"
                      style={{ textAlign: "center" }}
                    >
                      Choose file
                    </label>
                  </div>
                </div>

                <div className="form-group">
                  <label for="workmen">Upload Aadhar</label>
                  <div className="custom-file">
                    <input
                      type="file"
                      className="form-control"
                      id="inputGroupFile01"
                      aria-describedby="inputGroupFileAddon01"
                    />
                    <label
                      className="custom-file-label"
                      htmlFor="inputGroupFile01"
                      style={{ textAlign: "center" }}
                    >
                      Choose file
                    </label>
                  </div>
                </div>

                <div className="form-group">
                  <label for="workmen">Upload PAN Card Of Company</label>
                  <div className="custom-file">
                    <input
                      type="file"
                      className="form-control"
                      id="inputGroupFile01"
                      aria-describedby="inputGroupFileAddon01"
                    />
                    <label
                      className="custom-file-label"
                      htmlFor="inputGroupFile01"
                      style={{ textAlign: "center" }}
                    >
                      Choose file
                    </label>
                  </div>
                </div>

                <div className="form-group">
                  <label for="workmen">Upload Address Proof Of Company</label>
                  <div className="custom-file">
                    <input
                      type="file"
                      className="form-control"
                      id="inputGroupFile01"
                      aria-describedby="inputGroupFileAddon01"
                    />
                    <label
                      className="custom-file-label"
                      htmlFor="inputGroupFile01"
                      style={{ textAlign: "center" }}
                    >
                      Choose file
                    </label>
                  </div>
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

export default UserRegistrationDetail;
