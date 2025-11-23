import React, { useContext } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { Trash2, X } from "lucide-react";
import { Minus, Plus } from "lucide-react";
import { CartContext } from "../context/CartContext";

const Cart = ({ cartOpen, closeMennu }) => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <Wrapper>
      <div
        className={`cart-drawer ${cartOpen ? "cart-drawer active" : ""}`}
        id="cart-drawer"
      >
        <form className="drawer-contents">
          <div className="drawer-fixed-header">
            <div className="drawer-header">
              <h6 className="drawer-header-title">Cart</h6>
              <div className="drawer-close">
                <button
                  type="button"
                  className="drawer-close-btn"
                  onClick={closeMennu}
                >
                  <span className="drawer-close-icon">
                    <X size={16} strokeWidth={2} />
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="drawer-cart-empty">
            <div className="drawer-scrollable">
              <h2>Your cart is currently empty</h2>
              <Link to="#" className="btn btn-style2">
                Continue shopping
              </Link>
            </div>
          </div>
          {!cartItems || cartItems.length === 0 ? (
            <div className="text-center">
              <h2 className="fs-5 my-3">Your cart is currently empty</h2>
              <Link to="/product" className="btn btn-style2">
                Continue shopping
              </Link>
            </div>
          ) : (
            <div className="drawer-inner">
              <div className="drawer-scrollable">
                <ul className="cart-items">
                  {cartItems.map((product) => {
                    return (
                      <li key={product.id} className="cart-item">
                        <div className="cart-item-info">
                          <div className="cart-item-image">
                            <Link to="/product-details">
                              <img
                                src={product.img1}
                                className="img-fluid"
                                alt="cart-1"
                              />
                            </Link>
                          </div>
                          <div className="cart-item-details">
                            <div className="cart-item-name">
                              <Link to="/product-details">
                                Portable speaker
                              </Link>
                            </div>
                            <div className="cart-pro-info">
                              <div className="cart-qty-price">
                                <span> {product.quantity}</span>
                                <span>×</span>
                                <span className="price">
                                  {product.newPrice}
                                </span>
                              </div>
                            </div>
                            <div className="cart-item-sub">
                              <div className="cart-qty-price-remove">
                                <div className="cart-item-qty">
                                  <div className="js-qty-wrapper">
                                    <div className="js-qty-wrap">
                                      <button
                                        type="button"
                                        className="js-qty-adjust ju-qty-adjust-minus"
                                      >
                                        <Minus size={16} strokeWidth={2} />
                                      </button>
                                      <input
                                        type="text"
                                        className="js-qty-num"
                                        name="name"
                                        defaultValue="1"
                                        pattern="[0-9]*"
                                      />
                                      <button
                                        type="button"
                                        className="js-qty-adjust ju-qty-adjust-plus"
                                      >
                                        <Plus size={16} strokeWidth={2} />
                                      </button>
                                    </div>
                                  </div>
                                </div>
                                <div className="cart-item-price">
                                  <span className="cart-price">$12.00</span>
                                </div>
                                <div className="cart-item-remove">
                                  <button
                                    type="button"
                                    className="cart-remove"
                                    onClick={() => removeFromCart(product.id)}
                                  >
                                    <Trash2 size={16} strokeWidth={2} />
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="cart-item-variants">
                              <h6>Color:</h6>
                              <span>Black</span>
                            </div>
                            <div className="cart-item-variants">
                              <h6>Size:</h6>
                              <span>XL</span>
                            </div>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                  {/* <li className="cart-item">
                <div className="cart-item-info">
                  <div className="cart-item-image">
                    <Link to="/product-details">
                      <img
                        src="/img/menu/home-pro-banner1.jpg"
                        className="img-fluid"
                        alt="cart-1"
                      />
                    </Link>
                  </div>
                  <div className="cart-item-details">
                    <div className="cart-item-name">
                      <Link to="/product-details">Portable speaker</Link>
                    </div>
                    <div className="cart-pro-info">
                      <div className="cart-qty-price">
                        <span>1</span>
                        <span>×</span>
                        <span className="price">$25.00</span>
                      </div>
                    </div>
                    <div className="cart-item-sub">
                      <div className="cart-qty-price-remove">
                        <div className="cart-item-qty">
                          <div className="js-qty-wrapper">
                            <div className="js-qty-wrap">
                              <button
                                type="button"
                                className="js-qty-adjust ju-qty-adjust-minus"
                              >
                                <Minus size={16} strokeWidth={2} />
                              </button>
                              <input
                                type="text"
                                className="js-qty-num"
                                name="name"
                                defaultValue="1"
                                pattern="[0-9]*"
                              />
                              <button
                                type="button"
                                className="js-qty-adjust ju-qty-adjust-plus"
                              >
                                <Plus size={16} strokeWidth={2} />
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="cart-item-price">
                          <span className="cart-price">$12.00</span>
                        </div>
                        <div className="cart-item-remove">
                          <button type="button" className="cart-remove">
                            <Trash2 size={16} strokeWidth={2} />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="cart-item-variants">
                      <h6>Color:</h6>
                      <span>Black</span>
                    </div>
                    <div className="cart-item-variants">
                      <h6>Size:</h6>
                      <span>XL</span>
                    </div>
                  </div>
                </div>
              </li> */}
                </ul>
                <div className="drawer-notes">
                  <label htmlFor="cartnote">Order note</label>
                  <textarea
                    name="note"
                    className="cart-notes"
                    id="cartnote"
                  ></textarea>
                </div>
              </div>
              <div className="drawer-footer">
                <div className="drawer-block drawer-total">
                  <span className="drawer-subtotal">Subtotal</span>
                  <span className="drawer-totalprice">$74.00</span>
                </div>
                <div className="drawer-block drawer-ship-text">
                  <label className="box-area">
                    <span className="text">
                      I have read and agree with the
                      <Link to="/terms-condition">terms &amp; condition.</Link>
                    </span>
                    <input type="checkbox" className="cust-checkbox" />
                    <span className="cust-check"></span>
                  </label>
                </div>
                <div className="drawer-block drawer-cart-checkout">
                  <div className="cart-checkout-btn">
                    <button
                      type="button"
                      name="checkout"
                      className="btn btn-style2"
                      onClick={() => {
                        navigate("/cart-view");
                        closeMennu();
                      }}
                    >
                      View cart
                    </button>
                    <button
                      type="button"
                      className="checkout btn btn-style2 disabled"
                      onClick={() => navigate("/checkout")}
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default Cart;
