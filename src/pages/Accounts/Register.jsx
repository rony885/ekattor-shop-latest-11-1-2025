import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <section className="breadcrumb-area">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="breadcrumb-index">
                <ul className="breadcrumb-ul">
                  <li className="breadcrumb-li">
                    <Link className="breadcrumb-link" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-li">
                    <span className="breadcrumb-text">Create Account</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="customer-page section-ptb">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="log-acc" id="CreateAccountForm">
                <div className="section-capture">
                  <div className="section-title">
                    <h2>
                      <span>Create Account</span>
                    </h2>
                  </div>
                </div>

                <div className="log-acc-page">
                  <div className="contact-form-list">
                    <form method="post">
                      <ul className="form-fill">
                        <li className="form-fill-li FirstName">
                          <label>First Name</label>
                          <input
                            type="text"
                            name="first_name"
                            autoComplete="given-name"
                            placeholder="First Name"
                          />
                        </li>

                        <li className="form-fill-li LastName">
                          <label>Last Name</label>
                          <input
                            type="text"
                            name="last_name"
                            autoComplete="family-name"
                            placeholder="Last Name"
                          />
                        </li>

                        <li className="form-fill-li Email">
                          <label>Email address</label>
                          <input
                            type="email"
                            name="email"
                            autoComplete="email"
                            placeholder="Email address"
                          />
                        </li>

                        <li className="form-fill-li Password">
                          <label>Password</label>
                          <input
                            type="password"
                            name="password"
                            placeholder="Password"
                          />
                        </li>

                        <li className="form-fill-li ConfirmPassword">
                          <label>Confirm Password</label>
                          <input
                            type="password"
                            name="confirm_password"
                            placeholder="Confirm Password"
                          />
                        </li>
                      </ul>

                      <div className="form-action-button">
                        <div className="button-forget">
                          <button type="submit" className="btn btn-style2">
                            Create Account
                          </button>
                          <Link to="/login-account">
                            Already have an account?
                          </Link>
                        </div>
                      </div>
                    </form>
                  </div>

                  <div className="acc-wrapper">
                    <h6>Returning Customer?</h6>
                    <div className="account-optional">
                      <Link to="/login-account">Login to your account</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
