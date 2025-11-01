import React from "react";
import { Link } from "react-router-dom";
import { Grid, Heart, Home, ShoppingCart, User } from "lucide-react";

const BottomMenu = () => {
  return (
    <div className="bottom-menu">
      <ul className="bottom-menu-element">
        <li className="bottom-menu-wrap">
          <div className="bottom-menu-wrapper">
            <Link to="/" className="bottom-menu-home">
              <span className="bottom-menu-icon">
                <Home size={24} strokeWidth={2} />
              </span>

              <span className="bottom-menu-title">Home</span>
            </Link>
          </div>
        </li>
        <li className="bottom-menu-wrap">
          <div className="bottom-menu-wrapper">
            <Link to="/login-account" className="bottom-menu-user">
              <span className="bottom-menu-icon">
                <User size={24} strokeWidth={2} />
              </span>

              <span className="bottom-menu-title">Account</span>
            </Link>
          </div>
        </li>
        <li className="bottom-menu-wrap">
          <div className="bottom-menu-wrapper">
            <Link to="/product" className="bottom-menu-collection">
              <span className="bottom-menu-icon">
                <Grid size={24} strokeWidth={2} />
              </span>

              <span className="bottom-menu-title">Shop</span>
            </Link>
          </div>
        </li>
        <li className="bottom-menu-wrap">
          <div className="bottom-menu-wrapper">
            <Link to="/wishlist-product" className="bottom-menu-wishlist">
              <span className="bottom-menu-icon-wrap">
                <span className="bottom-menu-icon">
                  <Heart size={24} strokeWidth={2} />
                </span>
                <span className="bottom-menu-counter wishlist-counter">5</span>
              </span>

              <span className="bottom-menu-title">Wishlist</span>
            </Link>
          </div>
        </li>
        <li className="bottom-menu-wrap">
          <div className="bottom-menu-wrapper">
            <Link to="#" className="bottom-menu-cart">
              <span className="bottom-menu-icon-wrap">
                <span className="bottom-menu-icon">
                  <ShoppingCart size={24} strokeWidth={2} />
                </span>
                <span className="bottom-menu-counter cart-counter">3</span>
              </span>

              <span className="bottom-menu-title">Cart</span>
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default BottomMenu;
