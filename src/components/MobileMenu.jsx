import React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { X } from "lucide-react";
import { FaFacebookF, FaPinterestP } from "react-icons/fa";

const MobileMenu = ({ menuOpen, closeMenu }) => {
  return (
    <Wrapper>
      <div
        className={`mobile-menu ${menuOpen ? "mobile-menu active" : ""}`}
        id="mobile-menu"
      >
        <div className="mobile-contents">
          <div className="menu-close">
            <button className="menu-close-btn" onClick={closeMenu}>
              <span className="menu-close-icon">
                <X size={24} strokeWidth={2} />
              </span>
            </button>
          </div>
          <div className="mobilemenu-content">
            <div className="main-wrap">
              <ul className="main-menu">
                <li className="menu-link">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `link-title ${isActive ? "active-link" : ""}`
                    }
                  >
                    <span className="sp-link-title">Home</span>
                  </NavLink>
                </li>
                <li className="menu-link">
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      `link-title ${isActive ? "active-link" : ""}`
                    }
                  >
                    <span className="sp-link-title">About</span>
                  </NavLink>
                </li>
                <li className="menu-link">
                  <NavLink
                    to="/product"
                    className={({ isActive }) =>
                      `link-title ${isActive ? "active-link" : ""}`
                    }
                  >
                    <span className="sp-link-title">Product</span>
                  </NavLink>
                </li>
                <li className="menu-link">
                  <NavLink
                    to="/blog"
                    className={({ isActive }) =>
                      `link-title ${isActive ? "active-link" : ""}`
                    }
                  >
                    <span className="sp-link-title">Blog</span>
                  </NavLink>
                </li>
                <li className="menu-link">
                  <NavLink
                    to="#menu-sub"
                    className="link-title"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                  >
                    <span className="sp-link-title">Page</span>
                    <span className="menu-arrow">
                      <i className="fa-solid fa-angle-down"></i>
                    </span>
                  </NavLink>

                  <div
                    className="menu-dropdown menu-sub collapse"
                    id="menu-sub"
                  >
                    <ul className="ul">
                      <li className="menusub-li">
                        <NavLink
                          to="#menu-sup"
                          className="menusub-title"
                          data-bs-toggle="collapse"
                          aria-expanded="false"
                        >
                          <span className="sp-link-title">About us</span>
                          <span className="menu-arrow">
                            <i className="fa-solid fa-angle-down"></i>
                          </span>
                        </NavLink>
                        <div
                          className="menusup-dropdown collapse"
                          id="menu-sup"
                        >
                          <ul className="menusup-ul">
                            <li className="menusup-li">
                              {/* <Link to="/about" className="menusup-title">
                                <span className="sp-link-title">About us</span>
                              </Link> */}
                              <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                  `menusup-title ${
                                    isActive ? "active-link" : ""
                                  }`
                                }
                              >
                                <span className="sp-link-title">About us</span>
                              </NavLink>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="menusub-li">
                        <Link
                          to="#account"
                          className="menusub-title"
                          data-bs-toggle="collapse"
                          aria-expanded="false"
                        >
                          <span className="sp-link-title">My account</span>
                          <span className="menu-arrow">
                            <i className="fa-solid fa-angle-down"></i>
                          </span>
                        </Link>
                        <div className="menusup-dropdown collapse" id="account">
                          <ul className="menusup-ul">
                            <li className="menusup-li">
                              <Link
                                to="/order-history"
                                className="menusup-title"
                              >
                                <span className="sp-link-title">Order</span>
                              </Link>
                            </li>
                            <li className="menusup-li">
                              <Link to="/profile" className="menusup-title">
                                <span className="sp-link-title">Profile</span>
                              </Link>
                            </li>
                            <li className="menusup-li">
                              <Link to="/pro-address" className="menusup-title">
                                <span className="sp-link-title">Address</span>
                              </Link>
                            </li>
                            <li className="menusup-li">
                              <Link
                                to="/pro-wishlist"
                                className="menusup-title"
                              >
                                <span className="sp-link-title">Wishlist</span>
                              </Link>
                            </li>
                            <li className="menusup-li">
                              <Link to="/pro-tickets" className="menusup-title">
                                <span className="sp-link-title">
                                  My tickets
                                </span>
                              </Link>
                            </li>
                            <li className="menusup-li">
                              <Link
                                to="/billing-info"
                                className="menusup-title"
                              >
                                <span className="sp-link-title">
                                  Billing info
                                </span>
                              </Link>
                            </li>
                            <li className="menusup-li">
                              <Link to="/track-page" className="menusup-title">
                                <span className="sp-link-title">
                                  Track page
                                </span>
                              </Link>
                            </li>
                            <li className="menusup-li">
                              <Link
                                to="/order-complete"
                                className="menusup-title"
                              >
                                <span className="sp-link-title">
                                  Order complete
                                </span>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="menusub-li">
                        <Link
                          to="#menu-sup-contact"
                          className="menusub-title"
                          data-bs-toggle="collapse"
                          aria-expanded="false"
                        >
                          <span className="sp-link-title">Contact us</span>
                          <span className="menu-arrow">
                            <i className="fa-solid fa-angle-down"></i>
                          </span>
                        </Link>
                        <div
                          className="menusup-dropdown collapse"
                          id="menu-sup-contact"
                        >
                          <ul className="menusup-ul">
                            <li className="menusup-li">
                              <Link to="/contact" className="menusup-title">
                                <span className="sp-link-title">
                                  Contact us
                                </span>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="menusub-li">
                        <Link
                          to="#desk-checkout"
                          className="menusub-title"
                          data-bs-toggle="collapse"
                          aria-expanded="false"
                        >
                          <span className="sp-link-title">Checkout</span>
                          <span className="menu-arrow">
                            <i className="fa-solid fa-angle-down"></i>
                          </span>
                        </Link>
                        <div
                          className="menusup-dropdown collapse"
                          id="desk-checkout"
                        >
                          <ul className="menusup-ul">
                            <li className="menusup-li">
                              <Link to="/checkout" className="menusup-title">
                                <span className="sp-link-title">Checkout</span>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="menusub-li">
                        <Link to="faq" className="menusub-title">
                          <span className="sp-link-title">Faq's</span>
                        </Link>
                      </li>
                      <li className="menusub-li">
                        <Link to="/privacy-policy" className="menusub-title">
                          <span className="sp-link-title">Privacy policy</span>
                        </Link>
                      </li>
                      <li className="menusub-li">
                        <Link to="/payment-policy" className="menusub-title">
                          <span className="sp-link-title">Payment policy</span>
                        </Link>
                      </li>
                      <li className="menusub-li">
                        <Link to="/terms-condition" className="menusub-title">
                          <span className="sp-link-title">
                            Terms &amp; condition
                          </span>
                        </Link>
                      </li>
                      <li className="menusub-li">
                        <Link to="/return-policy" className="menusub-title">
                          <span className="sp-link-title">Return policy</span>
                        </Link>
                      </li>
                      <li className="menusub-li">
                        <Link to="/404" className="menusub-title">
                          <span className="sp-link-title">404</span>
                        </Link>
                      </li>
                      <li className="menusub-li">
                        <Link to="/coming-soon" className="menusub-title">
                          <span className="sp-link-title">Coming soon</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="menu-link">
                  <Link
                    to="https://themeforest.net/user/spacingtech_webify/portfolio"
                    className="link-title"
                  >
                    <span className="sp-link-title">Buy electon</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mobile-social">
              <div className="mob-wrap mob-social">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .link-title.active-link .sp-link-title,
  .menusub-title.active-link .sp-link-title,
  .menusup-title.active-link .sp-link-title {
    color: #0d6efd !important;
  }
`;

export default MobileMenu;
