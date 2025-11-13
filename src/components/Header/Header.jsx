import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import categoriesData from "../../category.js";
import {
  FiHeart,
  FiMenu,
  FiSearch,
  FiShoppingBag,
  FiUser,
} from "react-icons/fi";

const Header = ({ toggleMenu, toggleMennu, toggleMennuVegaMobile }) => {
  const [isVegaOpen, setIsVegaOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  const handleVegaToggle = () => {
    setIsVegaOpen((prev) => !prev);
  };

  // ✅ Auto close when route changes
  useEffect(() => {
    setIsVegaOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    setCategories(categoriesData);
  }, []);

  return (
    <Wrapper>
      <header className="main-header" id="stickyheader">
        <div className="header-top-area">
          <div className="container-fluid">
            <div className="row">
              <div className="col">
                <div className="header-area">
                  <div className="header-element header-toggle">
                    <div className="header-icon-block">
                      <ul className="shop-element">
                        <li className="side-wrap toggler-wrap">
                          <div className="toggler-wrapper">
                            <button className="toggler-btn">
                              <span className="toggler-icon">
                                <FiMenu size={24} strokeWidth={2} />
                              </span>
                            </button>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="header-element header-logo">
                    <div className="header-theme-logo">
                      <Link to="/" className="theme-logo">
                        <img
                          src="/img/logo/logo.png"
                          className="img-fluid"
                          alt="logo"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="header-element header-search">
                    <div className="search-crap">
                      <div className="search-content">
                        <div className="search-box">
                          <form className="search-bar">
                            <div className="form-search">
                              <input
                                type="search"
                                name="q"
                                placeholder="Find our search"
                                className="search-input"
                              />
                              <button
                                type="submit"
                                className="search-btn"
                                onClick={() => {
                                  navigate("/search");
                                }}
                              >
                                <i className="feather-search"></i>
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="header-element header-icon">
                    <div className="header-icon-block">
                      <ul className="shop-element">
                        <li className="side-wrap search-wrap">
                          <div className="search-wrapper">
                            <Link to="#searchmodal" data-bs-toggle="modal">
                              <span className="search-icon">
                                <FiSearch size={22} color="#555" />
                              </span>
                            </Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="header-element header-details">
                    <div className="header-icon-details">
                      <ul className="details-ul">
                        <li className="info-wrap info-headphones">
                          <div className="info-wrapper">
                            <Link to="/" className="icon">
                              <i className="feather-headphones"></i>
                            </Link>
                            <div className="info-text">
                              <span className="label">Hotline number</span>
                              <Link
                                to="tel:+260005002600"
                                className="info-link"
                              >
                                +2600 0500 2600
                              </Link>
                            </div>
                          </div>
                        </li>
                        <li className="info-wrap info-Login">
                          <div className="info-wrapper">
                            <Link to="/" className="icon">
                              <i className="feather-user"></i>
                            </Link>
                            <div className="info-text">
                              <span className="label">My account</span>
                              <Link to="/login-account" className="info-link">
                                Login & Register
                              </Link>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- header-bottam start --> */}
        <div className="header-bottom-area">
          <div className="container-fluid">
            <div className="row">
              <div className="col">
                <div className="main-block">
                  <div className="side-wrap header-support">
                    <div className="vega-menu-area">
                      <Link
                        to="#vega-collapse"
                        className="browse-cat"
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        onClick={(e) => {
                          e.preventDefault();
                          handleVegaToggle();
                        }}
                      >
                        <span className="menu-icon">
                          <i className="feather-menu"></i>
                        </span>
                        <span className="menu-title">Trending category</span>
                        <span className="menu-arrow">
                          <i className="fa fa-angle-down"></i>
                        </span>
                      </Link>
                      <Link
                        to="#vega-collapse"
                        className="browse-cat browse-cat-lg"
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        onClick={(e) => {
                          toggleMennuVegaMobile();
                        }}
                      >
                        <span className="menu-icon">
                          <i className="feather-menu"></i>
                        </span>
                        <span className="menu-title">Trending category</span>
                        <span className="menu-arrow">
                          <i className="fa fa-angle-down"></i>
                        </span>
                      </Link>

                      {isVegaOpen && (
                        <div className="vegawrap" id="vega-collapse">
                          {categories.map((cat) => {
                            return (
                              <ul key={cat.id} className="vega-menu">
                                <li className="menu-link">
                                  <Link to="/product" className="link-title">
                                    <span className="menu-img-icon">
                                      <img
                                        src={cat.img}
                                        className="img-fluid"
                                        alt="cate-menu1"
                                      />
                                    </span>
                                    <span className="sp-link-title">
                                      {cat.title}
                                    </span>
                                  </Link>
                                </li>
                              </ul>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="side-wrap header-menu">
                    <div className="mainmenu-content">
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
                              <span className="sp-link-title">Blogs</span>
                            </NavLink>
                          </li>

                          <li className="menu-link">
                            <NavLink
                              to="/about"
                              className={({ isActive }) =>
                                `link-title ${isActive ? "active-link" : ""}`
                              }
                            >
                              <span className="sp-link-title">Pages</span>
                              <span className="menu-arrow">
                                <i className="fa fa-angle-down"></i>
                              </span>
                            </NavLink>
                            <div
                              className="menu-dropdown menu-sub collapse"
                              id="page"
                            >
                              <ul className="ul">
                                <li className="menusub-li">
                                  <Link
                                    to="/login-account"
                                    className="menusub-title"
                                  >
                                    <span className="sp-link-title">
                                      My account
                                    </span>
                                    <span className="menu-arrow">
                                      <i className="fa-solid fa-angle-right"></i>
                                    </span>
                                  </Link>
                                  <div className="menusup-dropdown collapse">
                                    <ul className="menusup-ul">
                                      <li className="menusup-li">
                                        <Link
                                          to="/order-history"
                                          className="menusup-title"
                                        >
                                          <span className="sp-link-title">
                                            Order
                                          </span>
                                        </Link>
                                      </li>
                                      <li className="menusup-li">
                                        <Link
                                          to="/profile"
                                          className="menusup-title"
                                        >
                                          <span className="sp-link-title">
                                            Profile
                                          </span>
                                        </Link>
                                      </li>
                                      <li className="menusup-li">
                                        <Link
                                          to="/pro-address"
                                          className="menusup-title"
                                        >
                                          <span className="sp-link-title">
                                            Address
                                          </span>
                                        </Link>
                                      </li>
                                      <li className="menusup-li">
                                        <Link
                                          to="/pro-wishlist"
                                          className="menusup-title"
                                        >
                                          <span className="sp-link-title">
                                            Wishlist
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
                                    to="/checkout"
                                    className="menusub-title"
                                  >
                                    <span className="sp-link-title">
                                      Checkout
                                    </span>
                                    <span className="menu-arrow">
                                      <i className="fa-solid fa-angle-right"></i>
                                    </span>
                                  </Link>
                                </li>
                                <li className="menusub-li">
                                  <Link to="#" className="menusub-title">
                                    <span className="sp-link-title">
                                      Features
                                    </span>
                                    <span className="menu-arrow">
                                      <i className="fa-solid fa-angle-right"></i>
                                    </span>
                                  </Link>
                                  <div className="menusup-dropdown collapse">
                                    <ul className="menusup-ul">
                                      <li className="menusup-li">
                                        <Link
                                          to="/cancellation"
                                          className="menusup-title"
                                        >
                                          <span className="sp-link-title">
                                            Cancellation
                                          </span>
                                        </Link>
                                      </li>
                                      <li className="menusup-li">
                                        <Link
                                          to="/cart-page"
                                          className="menusup-title"
                                        >
                                          <span className="sp-link-title">
                                            Cart page
                                          </span>
                                        </Link>
                                      </li>
                                      <li className="menusup-li">
                                        <Link
                                          to="/wishlist-product"
                                          className="menusup-title"
                                        >
                                          <span className="sp-link-title">
                                            Wishlist product
                                          </span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="side-wrap header-icon">
                    <div className="header-icon-block">
                      <ul className="shop-element">
                        <li className="side-wrap toggler-wrap">
                          <div className="toggler-wrapper">
                            {/* ======= button bar ======= */}
                            <button
                              className="toggler-btn"
                              onClick={toggleMenu}
                            >
                              <span className="toggler-icon">
                                <FiMenu
                                  size={24}
                                  strokeWidth={2}
                                  color="currentColor"
                                />
                              </span>
                            </button>
                          </div>
                        </li>
                        <li className="side-wrap search-wrap">
                          <div className="search-wrapper">
                            <Link to="#searchmodal" data-bs-toggle="modal">
                              <span className="search-icon">
                                <FiSearch size={20} color="currentColor" />
                              </span>
                            </Link>
                          </div>
                        </li>
                        <li className="side-wrap user-wrap">
                          <div className="user-wrapper">
                            <Link
                              to="#store-account"
                              className="collapsed"
                              data-bs-toggle="collapse"
                              aria-expanded="false"
                            >
                              <span className="user-icon">
                                <FiUser size={20} color="currentColor" />
                              </span>

                              <span className="user-title">Login</span>
                            </Link>
                            <div
                              className="user-drower collapse"
                              id="store-account"
                            >
                              <Link to="/login-account">Login</Link>
                              <Link to="/create-account">Register</Link>
                            </div>
                          </div>
                        </li>
                        <li className="side-wrap wishlist-wrap">
                          <div className="wishlist-wrapper">
                            {/* <Link to="/wishlist-empty"> */}
                            <Link to="/wishlist-product">
                              <span className="wishlist-icon-count">
                                <span className="wishlist-icon">
                                  <FiHeart size={20} color="currentColor" />
                                </span>
                              </span>

                              <span className="wishlist-title">
                                My wishlist
                              </span>
                            </Link>
                          </div>
                        </li>
                        <li className="side-wrap cart-wrap">
                          <div className="cart-wrapper" onClick={toggleMennu}>
                            <div className="shopping-cart">
                              <Link className="add-to-cart" to="#">
                                <span className="icon">
                                  <FiShoppingBag
                                    size={20}
                                    color="currentColor"
                                  />
                                </span>

                                <span className="cart-title text">My cart</span>
                                <span className="bigcounter">04</span>
                              </Link>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .link-title.active-link .sp-link-title {
    color: #0d6efd !important;
  }
`;

export default Header;
