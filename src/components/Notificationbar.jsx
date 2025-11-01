import React from "react";
import { FaFacebookF, FaPinterestP } from "react-icons/fa";
import { Link } from "react-router-dom";

const Notificationbar = () => {
  return (
    <div className="notification-bar">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <ul className="notification-content">
              <li className="noti-wrap noti-email-wrap">
                <div className="noti-email">
                  <div className="emailtext">
                    <p>
                      <Link
                        to="Email:Electondemo@gmail.com"
                        title="Email:Electondemo@gmail.com"
                      >
                        Email : Electondemo@gmail.com
                      </Link>
                    </p>
                  </div>
                </div>
              </li>
              <li className="noti-wrap noti-text-wrap">
                <p>
                  <span>Free worldwide & Free return for above uk</span>
                  <span className="code-text">Shop now!</span>
                </p>
              </li>
              <li className="noti-wrap noti-social">
                <ul className="social-icon">
                  <li>
                    <Link to="https://www.facebook.com/">
                      <span className="icon-social facebook">
                        <FaFacebookF size={20} />
                      </span>
                      <span>90K Followers</span>
                    </Link>
                  </li>

                  <li>
                    <Link to="https://in.pinterest.com/">
                      <span className="icon-social pinterest">
                        <FaPinterestP size={20} />
                      </span>
                      <span>60K Followers</span>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notificationbar;
